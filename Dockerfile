FROM node:lts-alpine

ARG service

WORKDIR /app

COPY ./package*.json ./

RUN npm install -g nx
RUN npm install

COPY . .

CMD ["nx", "run-many", "--target=serve"]