# Aplicación My Pills Today

El objetivo de esta aplicación es tener toda la información sobre nuestra medicación guardada en un mismo lugar y de fácil acceso. Además, las pastillas se filtran dependiendo del día en el que se han de tomar y la hora, para que el usuario sepa qué medicacion corresponde a cada día y a cada momento. 

## Iniciar el proyecto

Ejecuta `npm install` en la carpeta del proyecto para instalar las dependencias relacionadas con Express (el servidor).

Haz `cd client` y ejecuta `npm install` para instalar las dependencias relacionadas con React (el cliente).

Para crear la base de datos:

Crea un archivo `.env`  en la carpeta del proyecto y añade

```
DB_NAME=medication 
DB_PASS=YOUR_PASSWORD
```

(reemplaza `YOUR_PASSWORD` con tu contraseña)

Alternativamente, puedes renombrar el archivo proporcionado `.env.example` a `.env`.

Ejecuta `mysql -u root -p` para acceder a la consola de MySQL usando tu contraseña.

En la consola de MySQL, ejecuta `create database medication;` para crear una base de datos en MySQL.

Ejecuta lo siguiente en la consola de MySQL: `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD';` (reemplaza `YOUR_PASSWORD` con tu contraseña)

Ejecuta `node model/database.js` en tu  **TERMINAL**, en la carpeta del  **proyecto**  (¡no en tu consola de MySQL! Abre una nueva ventana de la terminal para esto). Esto creará dos tablas llamada 'pills' y 'daily_pills' en tu base de datos.

Para ejecutar los servidores de desarrollo: 
- Ejecuta `npm start` en la carpeta del proyecto para iniciar el servidor de Express 
- Haz `cd client` y ejecuta `npm run dev` para iniciar el servidor del cliente 

## Rutas del proyecto

- GET `http://localhost:5000/api/pills` muestra la lista con todas las pastillas.
- GET `http://localhost:5000/api/pills/frecuency` devuelve las pastillas con la información de la frecuencia para filtrarla en la página de las pastillas de hoy.
- GET `http://localhost:5000/api/pills/:pills_id` muestra toda la información de una pastilla en concreto.
- POST `http://localhost:5000/api/pills` crea una nueva pastilla.
- DELETE `http://localhost:5000/api/pills/:pills_id` elimina una pastilla.
- La ruta PUT está creada pero no se utiliza en el frontend. 

## Páginas

Una breve guía de todas las páginas que componen el proyecto.
- PillListPage -> La página home y donde se encuentra la lista de pastillas.
- PillDetailPage -> Página que muestra el detalle de la pastilla.
- MyPillsToday -> Página donde se muestran las pastillas que se han de tomar ese día. 
- AddPillPage -> Página donde está el formulario para añadir pastillas. 
- PillCreatedPage -> Página que aparece una vez creada una nueva pastilla con los detalles de la misma.
- DeletedPillPage -> Página que aparece para confirmar que has borrado una pastilla. 

Páginas que no se utilizan:
- Configuration -> Creada para administrar las alarmas para las horas de las comidas. FUTURE FEATURE
- AlarmsChanged -> Creada para informar de que el tiempo de la alarma ha sido cambiado. 

## Future Features

    - Mejorar el formulario para aportar más información sobre las pastillas como la cantidad en ml si se trata de un jarabe o una foto de la caja de la medicación.
    - Añadir un apartado para pastillas que se tomen cada X horas.
    - Agregar una alarma que te avise a las horas designadas de la comida para tomarte la medicación.
    - Crear un apartado en el formulario en el que se añada el número total de comprimidos por caja y que la aplicación te avise de cuándo se van a terminar. 
    - Con respecto a los estilos, poder agrandar la letra y añadir iconos.