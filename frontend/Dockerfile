# Utiliser l'image Nginx alpine, qui est légère
FROM nginx:alpine

# Copier les fichiers statiques dans le répertoire par défaut d'Nginx
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/

# Exposer le port 80 (port HTTP standard)
EXPOSE 80

# Commande par défaut pour démarrer Nginx (assurez-vous que Nginx reste actif)
CMD ["nginx", "-g", "daemon off;"]

