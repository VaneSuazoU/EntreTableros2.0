# Etapa 1: Build
FROM node:18-alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa 2: Servidor NGINX
FROM nginx:alpine
COPY --from=build /app/dist/entre-tableros/browser /usr/share/nginx/html
