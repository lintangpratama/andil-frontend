FROM node:lts-alpine3.15 as base
WORKDIR /opt
COPY package*.json ./
RUN npm ci --production && npm cache clean --force

FROM base as prod
ENV PATH=/opt/node_modules/.bin:$PATH
WORKDIR /opt/app
COPY . .
RUN npm run build 
EXPOSE 3000
CMD npm run start
HEALTHCHECK CMD curl --fail http://localhost:300 || exit 1