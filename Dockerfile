FROM mhart/alpine-node:6

WORKDIR /src

COPY . .

RUN npm install
RUN npm run typings install

EXPOSE 3000
CMD ["npm", "start"]