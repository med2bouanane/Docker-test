# nos basamos en la imagen de node version 8
# la busca en local si no la encuentra la descarga de DockerHub
FROM node:8
MAINTAINER mbouanane@kiloutou.fr

# Directorio de trabajo dentro del container 
WORKDIR /app
# Copiar el contenido de la carpeta local (fisica del host) 
# => en el directorio actual del container (app en este caso por ls definición anterior WORKDIR)
ADD . /app
# COPY test-login-2/ .
# parecido al anterior ADD . /app 
