FROM node:lts
ENV HOST 0.0.0.0

WORKDIR ~/cssc-website

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

CMD [ "npm", "start" ]
