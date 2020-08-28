FROM node:12.16.3
WORKDIR /api
COPY . .

RUN yarn install && \ 
      yarn global add @nestjs/cli
CMD ["yarn", "run", "start:dev"]
