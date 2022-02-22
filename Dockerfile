ARG NODE_VERSION=16

FROM node:${NODE_VERSION}-alpine AS prisma_distroless_base
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --prod

COPY . .


# Production build
FROM gcr.io/distroless/nodejs:${NODE_VERSION} AS prisma_distroless_prod
WORKDIR /app

ENV NODE_ENV production

COPY --from=prisma_distroless_base /app/index.js ./index.js
COPY --from=prisma_distroless_base /app/lib ./lib
COPY --from=prisma_distroless_base /app/node_modules ./node_modules

CMD ["index.js"]
