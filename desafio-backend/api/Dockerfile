FROM node:18.10.0-alpine3.16

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm run publish

EXPOSE 3001

ENTRYPOINT [ "npm","run" ]

CMD [ "perso" ]