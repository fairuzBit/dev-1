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

# Ensure correct permissions on runtime directories
echo "Ensuring storage permissions..."
chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Start processes
echo "Starting application services..."
exec supervisord -c /etc/supervisor/conf.d/supervisord.conf
