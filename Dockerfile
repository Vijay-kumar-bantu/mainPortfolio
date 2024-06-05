FROM node:18-alpine

WORKDIR /portfolio

COPY package* .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4173

CMD [ "npm","start" ]

