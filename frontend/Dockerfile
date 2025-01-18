# Use the official Node.js LTS image as the base
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code to the container
COPY . .

# Build the application
RUN npm run build

# Expose the port Vite will run on (default is 5173)
EXPOSE 5173

# Start the Vite development server
CMD ["npm", "run", "dev"]
