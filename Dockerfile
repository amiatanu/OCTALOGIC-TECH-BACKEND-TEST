FROM node:v14.18.1
WORKDIR /atanu
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node","index.js"]