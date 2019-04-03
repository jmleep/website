FROM nginx:alpine

RUN yarn
RUN yarn build
COPY ./dist /usr/share/nginx/html

EXPOSE 80

