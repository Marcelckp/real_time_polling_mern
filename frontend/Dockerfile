# Use the official Node.js image as the base image
FROM node:21-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# # Build the Next.js application
# RUN npm run dev

# Expose the port the app runs on
EXPOSE 3030

# Start the Next.js application
CMD ["npm", "run", "dev", "-p", "3030"]