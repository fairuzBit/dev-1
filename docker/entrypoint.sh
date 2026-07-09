#!/bin/sh
set -e

# Wait for database connection if DB_HOST is defined
if [ -n "$DB_HOST" ]; then
    echo "Waiting for database connection ($DB_HOST:$DB_PORT) to be ready..."
    until php -r "
        \$host = getenv('DB_HOST');
        \$port = getenv('DB_PORT') ?: 3306;
        \$fp = @fsockopen(\$host, \$port, \$errno, \$errstr, 2);
        if (\$fp) {
            fclose(\$fp);
            exit(0);
        }
        exit(1);
    "; do
        echo "Database is not ready yet, retrying in 2 seconds..."
        sleep 2
    done
    echo "Database is ready!"
fi

# Run migrations if enabled
if [ "$RUN_MIGRATIONS" = "true" ]; then
    echo "Running migrations..."
    php artisan migrate --force
fi

# Cache config, routes, and views for production performance
echo "Caching configuration and routes..."
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache

# Ensure required storage directories exist (crucial when using Railway Volumes)
echo "Ensuring storage directories exist..."
mkdir -p /var/www/html/storage/app/public/avatars
mkdir -p /var/www/html/storage/app/public/transcripts
mkdir -p /var/www/html/storage/app/public/certificates
mkdir -p /var/www/html/storage/framework/cache
mkdir -p /var/www/html/storage/framework/sessions
mkdir -p /var/www/html/storage/framework/views
mkdir -p /var/www/html/storage/logs

# Ensure correct permissions on runtime directories
echo "Ensuring storage permissions..."
chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Recreate storage symlink
echo "Recreating storage symlink..."
php artisan storage:link --force

# Update Nginx port configuration if PORT environment variable is set
if [ -n "$PORT" ]; then
    echo "Setting Nginx port to $PORT..."
    sed -i "s/listen 80;/listen $PORT;/g" /etc/nginx/http.d/default.conf
    sed -i "s/listen \[::\]:80;/listen [::]:$PORT;/g" /etc/nginx/http.d/default.conf
fi

# Start processes
echo "Starting application services..."
exec supervisord -c /etc/supervisor/conf.d/supervisord.conf
