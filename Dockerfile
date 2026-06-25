# ==============================================================================
# Stage 1: Build Frontend Assets (Vite + Inertia React)
# ==============================================================================
FROM node:20-alpine AS frontend-builder
WORKDIR /app

# Copy package configurations
COPY package.json package-lock.json ./

# Install npm dependencies
RUN npm ci

# Copy Vite, Tailwind, TS configs and sources
COPY vite.config.ts tsconfig.json postcss.config.js* tailwind.config.js* ./
COPY resources ./resources
COPY public ./public

# Build assets
RUN npm run build

# ==============================================================================
# Stage 2: Install Composer Dependencies
# ==============================================================================
FROM composer:2.7 AS composer-builder
WORKDIR /app

# Copy composer configurations
COPY composer.json composer.lock ./

# Install production dependencies
RUN composer install \
    --no-dev \
    --optimize-autoloader \
    --no-scripts \
    --no-interaction \
    --ignore-platform-reqs

# ==============================================================================
# Stage 3: Production Application Image
# ==============================================================================
FROM php:8.3-fpm-alpine
WORKDIR /var/www/html

# Set default production environment settings
ENV PORT=80
ENV RUN_MIGRATIONS=false

# Install required system packages (including poppler-utils for pdftotext)
RUN apk add --no-cache \
    nginx \
    supervisor \
    poppler-utils \
    bash \
    curl \
    libpng-dev \
    libjpeg-turbo-dev \
    freetype-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    mysql-client \
    dos2unix

# Install PHP extensions helper and required extensions
ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/
RUN chmod +x /usr/local/bin/install-php-extensions && \
    install-php-extensions pdo_mysql zip gd bcmath opcache intl exif pcntl

# Configure Nginx and Supervisor directories
RUN mkdir -p /run/nginx /var/log/supervisor /var/log/nginx

# Copy configuration files
COPY docker/nginx.conf /etc/nginx/http.d/default.conf
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh

# Convert line endings of entrypoint script to Unix format (handles Windows host builds)
RUN dos2unix /usr/local/bin/entrypoint.sh && chmod +x /usr/local/bin/entrypoint.sh

# Configure PHP production settings
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini" && \
    sed -i 's/variables_order = "GPCS"/variables_order = "EGPCS"/' "$PHP_INI_DIR/php.ini"

# Copy project files with www-data ownership
COPY --chown=www-data:www-data . .

# Copy vendors and built frontend assets from builder stages
COPY --from=composer-builder --chown=www-data:www-data /app/vendor ./vendor
COPY --from=frontend-builder --chown=www-data:www-data /app/public/build ./public/build

# Setup storage and cache directories with proper permissions
RUN mkdir -p bootstrap/cache storage/framework/cache storage/framework/sessions storage/framework/views storage/logs && \
    chown -R www-data:www-data bootstrap/cache storage && \
    chmod -R 775 bootstrap/cache storage

# Expose web server port
EXPOSE 80

# Execute entrypoint
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
