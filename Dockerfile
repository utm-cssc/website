FROM node:15.12.0-alpine3.10
ENV HOST 0.0.0.0

# Create app directory
RUN mkdir -p /usr/cssc-website

# Bundle app source
COPY . /usr/cssc-website
WORKDIR /usr/cssc-website

RUN yarn
RUN yarn build

CMD [ "yarn", "start" ]
