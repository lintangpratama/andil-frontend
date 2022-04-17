FROM node:lts-alpine3.15 as base
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm audit fix --force
RUN npm install
COPY . .
CMD ["npm", "start"]
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "npm", "start" ]