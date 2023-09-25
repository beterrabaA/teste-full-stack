FROM node:18.10.0-alpine3.16

WORKDIR /client

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

RUN npm run build

ENV NODE_ENV production

ENV NODE_API_PORT 2222

EXPOSE 3000

ENTRYPOINT [ "npm","run" ]

CMD [ "start" ]