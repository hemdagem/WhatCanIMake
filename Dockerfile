FROM node:8

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

WORKDIR /app
ADD . /app

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

EXPOSE 3000
# start app
CMD ["npm", "start"]