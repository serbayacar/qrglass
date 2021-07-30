
# Get base image
FROM node:latest

# Change working dir
WORKDIR /usr/app

# Install depandencies
COPY package.json .
RUN npm install --quiet

# Copying project files
COPY . .

# Configure envorionment variable
COPY .env.example .env

# Expose using port
EXPOSE 80

# Run Server
CMD ["npm", "start"]