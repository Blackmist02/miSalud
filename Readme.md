# MiSalud

¡Bienvenido a MiSalud!


## Instalación

1. Clona este repositorio en tu máquina local.
2. Instala xampp
3. En la base de datos SQLite crea la base de datos llamada "mi_base_de_datos" y pega los datos en el archivo db.txt
4. Para que funcione correctamente tienes que cambiar los datos del archivo /miBackend/server.js

const db = mysql.createConnection({
    host: 'localhost',
    user: 'Ignacio',
    password: 'Blackmist.3',
    database: 'mi_base_de_datos'
  });


por tu usuario




5. Abre una terminal y navega hasta la carpeta del proyecto.
6. Ejecuta el siguiente comando para instalar las dependencias:

    ```
    npm install
    ```

7. Inicia el servidor 

    ```
    node server.js
    ```

8. Inicia la aplicación con el siguiente comando:

    ```
    ionic serve
    ```
