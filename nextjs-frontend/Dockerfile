FROM node:18-alpine

WORKDIR /app

COPY package*.json /frontend/

USER node

COPY --chown=node:node . /frontend/

RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]