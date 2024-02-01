# Use an official PHP image as the base image
FROM php:8.2-apache

# Install system dependencies
RUN apt-get update && apt-get install -y \
    unzip \
    libzip-dev \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    libonig-dev

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql zip gd sockets

# Enable Apache modules
RUN a2enmod rewrite

# Set working directory
WORKDIR /var/www/html

# Copy Laravel project files
COPY . .

# Install Composer globally
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Set COMPOSER_ALLOW_SUPERUSER to allow plugins to run as root
ENV COMPOSER_ALLOW_SUPERUSER 1

# Add a custom Apache configuration file
COPY apache.conf /etc/apache2/sites-available/000-default.conf

# Install project dependencies
RUN composer install --no-scripts --no-autoloader

# Generate optimized autoload files
RUN composer dump-autoload --optimize

# Set file permissions (adjust as needed)
RUN chown -R www-data:www-data /var/www/html/storage

# Expose port 80
EXPOSE 80

# Start Apache server
CMD ["apache2-foreground"]
