FROM node:14
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3008
CMD ["npm", "start" ]