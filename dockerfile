FROM node:18.17.1-alpine AS builder

WORKDIR /usr/local/app

COPY . .

RUN yarn --frozen-lockfile && \
    yarn build

FROM nginx:1.21.1-alpine

# COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/local/app/dist /usr/share/nginx/html

CMD [ "nginx", "-g", "daemon off;" ]

# docker build --platform linux/arm64 -t portfolio .
# # operation check
# docker run -it --rm -p 8080:80 portfolio
# docker tag portfolio yumekiti/portfolio
# docker push yumekiti/portfolio