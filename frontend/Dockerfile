# Use an official Node runtime as a parent image
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

FROM nginx:alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Remove default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Add a custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]





