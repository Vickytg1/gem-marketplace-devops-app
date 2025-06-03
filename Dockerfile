# Stage 1: Build the app
FROM node:16 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve using nginx
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 (default for nginx)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
