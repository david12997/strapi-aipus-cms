FROM node:16-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev nano
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY ./package.json ./package-lock.json ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN npm install --legacy-peer-deps
WORKDIR /opt/app
COPY ./ .
RUN npm run build
EXPOSE 1337
CMD ["npm", "run", "start"]

#ln -s /usr/src/api/data/uploads public/uploads this comand is for create a link between the folder uploads strapi and volume uploads
#docker run -d -p 1337:1337 -v aipus-volume:/usr/src/api/data --restart=always david12997/cms-aipus:latest