FROM node:18.10.0-alpine3.16

WORKDIR /client

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npm","run" ]

CMD [ "start" ]