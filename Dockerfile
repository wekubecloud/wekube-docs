FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM caddy:latest
COPY --from=builder /app/build /usr/share/caddy
EXPOSE 80
