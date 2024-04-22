# Challenge Recursiva
-----------------------

TODO:  
**Backend:**  
- [ ] Desarrollo de backend en node.
     - [x] Subir el archivo y convertirlo de CSV a JSON,devolver un json por el endpoint uploadCsv con los datos del CSV.  
     - [x] Hacer los calculos estadisticos a partir del JSON y devolverlo como respuesta del endpoint /uploadCsv: 
          1. Cantidad total de personas registradas.
          2. El promedio de edad de los socios de Racing.
          3. listado con nombre, edad y equipo de las 100 primeras personas que:
                * esten casadas.
                * tengan estudiso univ.
            La lista debe mostrarse ordenada de menor a mayor por edad.
          4. Lista con los 5 nombres mas comunes entre los hinchas de River.
          5. Lista con equipo, promedio de edad, menor edad y mayor edad.
     - [ ] Hacer que el archivo se borre.
     - [ ] Solucionar problemas de codificación, caracteres con tilde (??)
     - [ ] Chequear que el archivo es del tipo correcto y si tiene el formato correcto.


**Frontend:**
- [ ] Generar el front para subir el archivo con la estética de "WeTransfer".
- [ ] Generar un dashboard con los listados y estadisticas devueltas por el endpoint.  