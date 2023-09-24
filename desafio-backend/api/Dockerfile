FROM node:18.10.0-alpine3.16

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npx prisma generate

COPY . .

EXPOSE 3001

ENTRYPOINT [ "npm","run" ]

CMD [ "perso" ]