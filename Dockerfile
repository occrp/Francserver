FROM node:0.10-onbuild

RUN npm -g install franc

EXPOSE 8023

CMD ["node", "francserver.js"]
