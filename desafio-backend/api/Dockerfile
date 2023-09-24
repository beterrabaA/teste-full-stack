FROM node:18.10.0-alpine3.16
WORKDIR /app
COPY package*.json ./
RUN npm install

RUN npx prisma generate

COPY . .
EXPOSE 3001
# CMD [ "node", "./dist/main.js" ]