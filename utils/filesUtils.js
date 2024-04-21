//************************ */
// Funciones para manipular archivos.
//************************ */
const fs = require('fs')

// Agrega una linea de texto al principio del archivo
function addLineAtTop(FilePath, header){
    var data = fs.readFileSync(FilePath);
    var fd = fs.openSync(FilePath, 'w+');
    var buffer = Buffer.from(header);
    
    fs.writeSync(fd, buffer, 0, buffer.length, 0); //write new data
    fs.writeSync(fd, data, 0, data.length, buffer.length); //append old data
    //fs.close(fd);

}

module.exports = addLineAtTop;