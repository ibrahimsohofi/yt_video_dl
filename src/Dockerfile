FROM node:22

# Install Python
RUN apt-get update && apt-get install -y python3

# Set working directory
WORKDIR /app

# Copy package.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose port
EXPOSE 3000

# Run command
CMD ["npm", "start"]