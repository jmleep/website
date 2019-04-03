FROM node:latest as builder

RUN mkdir /website

COPY package.json /website
COPY .postcssrc /website
COPY .posthtmlrc.js /website
COPY src /website/src

WORKDIR /website
RUN yarn
RUN ls -la
RUN yarn run build

FROM nginx:alpine
COPY --from=builder /website/dist /usr/share/nginx/html
EXPOSE 80


