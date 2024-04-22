# Challenge Superliga

Se desarrollo una aplicación web que permite subir un archivo CSV con un formato específico (ver formato), el cual contiene  
información sobre los socios de un club de fútbol. El funcionamiento básico es el siguiente:
    - Se carga un archivo CSV con el formato especificado, el cual es procesado para obtener las estadísticas a mostrar.
    - Se redirecciona al usuario a una página web con un dashboard que contiene las estadisticas calculadas
      a partir de el CSV proporcionado. 

## Funcionamiento

**Backend:**   
La aplicación consta de un backend hecho en NodeJS que provee una API REST, la cual recibe en el endpoint "API/uploadCsv" el archivo .CSV en un formato adecuado, calcula las estadísticas y las disponibiliza en el endpoint "API/stats", retornando un JSON que contiene todas las estadísticas ofrecidas.

**Frontend:**   
El frontend está hecho en REACT y provee un formulario para subir los archivos en la ruta "/", el cual usa "API/uploadCsv"  para subir los archivos e inmediatamente redirecciona al usuario a un dashboard donde se muestran las estadísticas del enpoint "API/stats".  

## Requisitos

- npm (versión 10)
- Node.js (versión 20)
- React (versión 18)

## Instalación

1. Clonar el repositorio: `git clone https://github.com/carlossanchezarg/challenge_recursiva.git`
2. Navega al directorio del proyecto: `cd challenge_recursiva/`
3. **Backend**: Para instalar el backend ir a : `cd backend/`
    - Instalar los paquete necesarios ejecutando: `npm install`
    - Lanzar la aplicación: : `npm start`
    -Los endpoint de la API en el ambiente local correran en http://localhost:3000
3. **Frontend**: Para instalar el fronted ir a: `cd fronted/cliente/`:
       - Instalar los paquetes necesarios ejecutando: `npm install`
       - Lanzar la aplicación: `npm start`
       - A continuación se abrira la app web en el navegador predeterminado del sistema.


## Issues

TODO: Arreglar problema con la codificación de caracteres con acento. En PCs con linux hace que no se muestren adecuadamente.