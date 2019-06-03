FROM node:10.13-alpine
ENV NODE_ENV=production SERVER_PORT=3000 DB_NAME="debt-angels-db" DB_HOST="localhost" DB_USERNAME="root" DB_PASSWORD="password" DB_DIALECT="mysql"
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
CMD npm start