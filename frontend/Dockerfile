# Dockerfile for frontend
FROM node:14 AS build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Remove default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Add a custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
