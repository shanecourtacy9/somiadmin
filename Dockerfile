#stage 1
FROM node:15.14.0 AS build
WORKDIR /app
COPY . .
RUN npm install --force
RUN npx nx build admin-panel --prod --skip-nx-cache
#stage 2
FROM nginx:alpine
COPY --from=build /app/dist/admin-panel /usr/share/nginx/html