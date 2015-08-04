# Pull nginx base image
FROM nginx:latest

# File Author / Maintainer
MAINTAINER Jimmy Gong <gong.jim@gmail.com>

# Install Node.js and other dependencies
RUN apt-get update && \
    apt-get -y install curl && \
    curl -sL https://deb.nodesource.com/setup && \
    apt-get -y install python build-essential nodejs nodejs-legacy npm

# Provides cached layer for node_modules
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /var/www/node_modules && cp -a /tmp/node_modules /var/www

# Copy custom configuration file from the current directory
COPY nginx.conf /etc/nginx/nginx.conf

# Copy static assets into var/www
COPY . /var/www

WORKDIR /var/www

RUN npm install -g gulp

RUN gulp build

# Expost port 80
EXPOSE 80

# Start up nginx server
CMD ["nginx"]