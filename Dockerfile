ARG NODE_VERSION=20.15.0
FROM node:${NODE_VERSION}-slim AS base
ENV NODE_ENV=production
WORKDIR /src

FROM base AS build
COPY . .
RUN npm install
RUN npm run postinstall
RUN npm run build
RUN npm prune

FROM base
COPY --from=build /src/.output /src/.output
EXPOSE 8080

CMD ["node", ".output/server/index.mjs"]