FROM node:18-alpine

WORKDIR /app

# Fix path to match WORKDIR
COPY package*.json ./

# npm install all deps in pckg json files
RUN npm install

# copy all files from root to /app . 
COPY . .

# build 
RUN npm run build

# nextjs default port exposed on 3000
EXPOSE 3000

CMD ["npm", "run", "start"]