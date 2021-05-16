FROM node:alpine As development
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build

FROM node:alpine as production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY --from=development /usr/src/app/dist ./dist
CMD ["node", "dist/app.js"]