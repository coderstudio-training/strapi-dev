# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source inside the Docker image
COPY . .

# Expose the port Strapi runs on
EXPOSE 1337

# Start the development server using chokidar for file watching
CMD ["npm", "run", "dev"]
