# Use a specific Node.js version with bullseye-slim as a parent image
FROM node:20.10.0-bullseye-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the working directory
COPY package.json ./

# Install app dependencies using Yarn
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the port on which your React app is running
EXPOSE 3000

# Define the command to run your application
CMD ["yarn", "start"]
