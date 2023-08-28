FROM node:lts-hydrogen as development

WORKDIR /app

COPY . .

RUN npm i -g pnpm && pnpm install && pnpm prisma generate && pnpm build

EXPOSE 3000

