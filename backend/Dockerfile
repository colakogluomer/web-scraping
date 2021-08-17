FROM node:16-alpine3.11

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 5000

ENV PORT 5000

CMD [ "npm", "start" ]