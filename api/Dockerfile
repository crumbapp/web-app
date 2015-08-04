#Pull node base image
FROM node:0.12

# File Author / Maintainer
MAINTAINER Jimmy Gong <gong.jim@gmail.com>

# Expose port 5000
EXPOSE 5000

# Add current directory into path /data in image
ADD . /data

# Set working directory to /data
WORKDIR /data

# Install dependencies from package.json and run index.json
CMD npm install --production; npm start