FROM nginx:stable-alpine3.17-slim

COPY  index.html /usr/share/nginx/html
COPY script.js /usr/share/nginx/html/script.js

EXPOSE 80