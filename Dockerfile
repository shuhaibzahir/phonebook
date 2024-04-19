FROM node:16

WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install
COPY . .

# Command to run the application
CMD ["node", "index.js"]
