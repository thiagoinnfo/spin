FROM node:10.16

RUN mkdir -p /home/node/app

ENV HOME=/home/node/app
COPY package.json $HOME/

USER root
WORKDIR $HOME

RUN npm i -g @adonisjs/cli
RUN npm install
