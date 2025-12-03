# Image de base : Node.js 18 sur Alpine Linux (léger)
FROM node:18-alpine

# Répertoire de travail dans le conteneur
WORKDIR /app

# Optimisation du cache Docker : copier d’abord les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source
COPY . .

# Documentation : le conteneur écoute sur 3000
EXPOSE 3000

# Commande de démarrage par défaut
CMD ["npm", "start"]

