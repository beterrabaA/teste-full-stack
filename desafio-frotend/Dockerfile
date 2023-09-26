FROM node:18.10.0-alpine3.16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8888

ENTRYPOINT [ "npm","run" ]

CMD [ "start" ]