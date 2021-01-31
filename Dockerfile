FROM node:14.15.4

RUN apt update && npm install -g @angular/cli

WORKDIR /usr/src

EXPOSE 4200