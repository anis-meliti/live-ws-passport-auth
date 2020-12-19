# Stage 1
# Imae base node alpine
FROM node:14-alpine as node
#create working directory
WORKDIR /usr/src/app
# copy package*.json
COPY package*.json ./
# update npm and install dependencies
RUN npm i npm@latest -g

RUN npm install
# copy project folder content
COPY . .
# run project on production
RUN npm run build
EXPOSE 3000 
CMD npm start