FROM node:current
ENV HOST 0.0.0.0

# Create app directory
RUN mkdir -p /usr/cssc-website

# Bundle app source
COPY . ~/cssc-website
WORKDIR ~/cssc-website

RUN yarn
RUN yarn build

CMD [ "yarn", "start" ]
