FROM nginx:alpine

RUN addgroup -S nonroot \
    && adduser -S nonroot -G nonroot

COPY index.html /usr/share/nginx/html
