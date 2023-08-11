FROM nginx:1.17.1-alpine

COPY  index.html /usr/share/nginx/html
COPY  script.js /etc/nginx/nginx.conf