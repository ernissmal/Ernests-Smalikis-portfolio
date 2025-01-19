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

# Build the application (for production)
RUN npm run build

# Expose the port Vite will run on (default is 5173)
EXPOSE 5173

# Set default environment variable for Vite
ENV NODE_ENV=development

# Default command to run the Vite development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
