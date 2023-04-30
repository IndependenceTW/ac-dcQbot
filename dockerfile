FROM node:18.16

WORKDIR /data
RUN git clone https://github.com/IndependenceTW/ac-dcQbot.git /data/app

WORKDIR /data/app
RUN npm install

CMD ["node", "src/bot.js"]