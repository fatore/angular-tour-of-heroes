FROM mhart/alpine-node:6

WORKDIR /src

ADD ./package.json .

# If you need npm, don't use a base tag
RUN npm install

ADD . .

EXPOSE 3000
CMD ["npm", "start"]