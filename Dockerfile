FROM node:18-bullseye-slim as dev
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
CMD [ "npm", "run", "dev" ]

