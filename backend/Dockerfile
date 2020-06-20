FROM node:12-alpine

WORKDIR /app

RUN npm install -g nodemon
RUN npm install -g serverless

COPY . .

RUN npm i

COPY entrypoint.sh /usr/local/bin/

RUN chmod 775 /usr/local/bin/entrypoint.sh

ENTRYPOINT [ "entrypoint.sh" ]

EXPOSE 3000


