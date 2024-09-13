FROM node:18-alpine

WORKDIR /myapp

COPY package*.json ./
COPY prisma ./prisma/
COPY next.config.mjs ./next.config.mjs

RUN npm install

COPY . .

RUN npx prisma generate
RUN npm run build

EXPOSE 3000

ENV NODE_ENV development

CMD ["npm", "start"]