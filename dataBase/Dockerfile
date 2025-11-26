FROM node:18-alpine

WORKDIR /app

# Optimisation du cache Docker : copier d'abord les dépendances
COPY package*.json ./
RUN npm install

# Copier le reste du code source
COPY . .

EXPOSE 3000

CMD ["npm", "start"]

