FROM node:24-alpine AS builder

WORKDIR /app

ENV NODE_OPTIONS=--dns-result-order=ipv4first

COPY package.json package-lock.json ./

RUN npm config set fetch-retries 5 \
    && npm config set fetch-retry-mintimeout 20000 \
    && npm config set fetch-retry-maxtimeout 120000 \
    && npm config set fetch-timeout 300000


RUN npm ci --legacy-peer-deps

COPY . .

RUN npm run build

RUN npm prune --omit=dev --legacy-peer-deps


FROM node:24-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV NODE_OPTIONS=--dns-result-order=ipv4first

RUN npm install -g srvx@0.12.6

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["srvx", "--prod", "--port=3000", "-s", "../client", "dist/server/server.js"]