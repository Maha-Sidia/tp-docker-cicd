# Utiliser l'image Node.js officielle basée sur Alpine
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source de l'application dans le conteneur
COPY . .

# Exposer le port (si nécessaire)
EXPOSE 3000

# Commande par défaut pour démarrer l'application
CMD ["npm", "start"]

