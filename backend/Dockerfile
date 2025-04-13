FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install --production
RUN npm install pm2 -g
COPY . .

ENV NODE_ENV production
ENV PORT 5000
EXPOSE 5000

# Create logs directory for PM2
RUN mkdir -p logs/pm2

CMD ["pm2-runtime", "server.js", "--name", "habitify-api"]