FROM node:18-bullseye-slim as dev
RUN apt update && apt install -y openssl
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
RUN npx prisma generate
COPY . .
CMD [ "npm", "run", "dev" ]

