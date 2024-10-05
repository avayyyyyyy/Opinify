FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

EXPOSE 3000

ENV NODE_ENV development

CMD ["npm", "run", "dev"]