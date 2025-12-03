# Image Nginx légère
FROM nginx:alpine

# Copier les fichiers statiques dans le répertoire par défaut de Nginx
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/

# Exposer le port HTTP
EXPOSE 80

# La commande par défaut de Nginx :
# nginx -g 'daemon off;'

