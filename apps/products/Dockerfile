FROM node:21-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm update -g npm

RUN apk update && apk add curl

RUN curl -v https://registry.npmjs.com/

RUN npm install --verbose

COPY . .

RUN npm run build products

FROM node:21-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/products/main"]