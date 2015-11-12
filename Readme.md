## Descripción

  Un chat realizado con NodeJS y SocketIO, como ejercicio de un curso de NodeJS.

## Instalación

  Para empezar a correr la aplicación en local hay que tener instalado nodeJS y mongoDB. Debemos ejecutar y mantener abierta una conexión mongod para que se pueda crear una base de datos. Si deseamos correr la aplicación en un server, hay que modificar el parámetro "mongoose.connect" en el archivo "Chat.js" dentro de la carpeta "models".


## Características del chat

  * Una sala de chat principal desde la que podemos hablar con otros usuarios
  * Listado de usuarios conectados y avisos cuando entra o sale alguien de la sala
  * Posibilidad de abrir privados a otros usuarios conectados al chat


## Módulos empleados

  * "cookie-parser" para trabajar con cookies
  * "express" para mejorar el rendimiento y agilizar el desarrollo de la aplicación
  * "jade" para el randerizado de archivos html
  * "mongodb-uri" para dar formato a la URI que conecta con la base de datos
  * "mongoose" para trabajar con bases de datos mongoDB
  * "socket.io" para hacer el chat


## Links de interés

  * Descarga esta y otras aplicaciones opne source en https://github.com/jrey1977
  * Más info sobre el autor en su página web: http://www.javirey.es
  * Puedes ver el chat en funcionamiento aqui: http://chat-jrey.herokuapp.com/
