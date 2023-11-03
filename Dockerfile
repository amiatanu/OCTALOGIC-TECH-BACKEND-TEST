FROM node:14.18.1

# Set the working directory inside the container
WORKDIR /OCTALOGIC TECH BACKEND TEST

# Copy package files and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your application listens on (if needed)
EXPOSE 5000

# Specify the command to run your application
CMD ["node", "index.js"]
