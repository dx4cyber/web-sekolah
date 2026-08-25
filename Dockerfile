FROM node:24-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --legacy-peer-deps

COPY . .

RUN npm run build


FROM node:24-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

RUN npm install -g srvx@0.12.6

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["srvx", "--prod", "--port=3000", "-s", "../client", "dist/server/server.js"]