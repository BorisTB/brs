# Dev Container Dockerfile for Cloudflare Wrangler
FROM node:22-bullseye

# Install pnpm
RUN npm install -g pnpm@8.15.5

# Install wrangler globally
RUN pnpm add -g wrangler@4.26.0

# Set up workdir
WORKDIR /workspace
