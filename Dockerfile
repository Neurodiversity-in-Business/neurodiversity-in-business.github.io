FROM node:20
COPY node_modules /opt/neurodiversity-main/node_modules
COPY public /opt/neurodiversity-main/public
COPY server.js /opt/neurodiversity-main/server.js
COPY package.json /opt/neurodiversity-main/package.json
CMD npm install  && \
 node /opt/neurodiversity-main/server.js
EXPOSE 8080
