# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json to the working directory
COPY package.json .

# Install app dependencies using Yarn
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN yarn next build

# Expose the port on which your React app is running
EXPOSE 3000

# Define the command to run your application
CMD ["yarn", "start"]
