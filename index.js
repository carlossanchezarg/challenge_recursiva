//*************** */
// index.js
//*************** */
const express = require('express');
const multer = require('multer');  
const fs = require('fs');
const path = require('path');
const csv2json = require('convert-csv-to-json');
const addLineAtTop = require('./utils/filesUtils');
const statsSociosDashboard = require('./utils/statsDashboard');
const app = express();
const port = 3000;

//********************* */
// Multer Configuration
//********************* */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

//******************* */
//Frontend endpoint
//******************* */
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
  });



//********************* */
// File Upload Endpoint
//********************* */
app.post('/upload', upload.single('fileName'), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // agrego header para facilitar la conversión a JSON.
    const headerCsv = 'Nombre;Edad;Equipo;EstadoCivil;NivelDeEstudios\n';
    addLineAtTop(req.file.path, headerCsv);

    let jsonData = csv2json.getJsonFromCsv(req.file.path);
    
    jsonStats = statsSociosDashboard(jsonData);

    res.json(jsonStats);

});
  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



