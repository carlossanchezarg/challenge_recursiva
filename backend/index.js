//*************** */
// index.js
//*************** */
const express = require('express');
const multer = require('multer');  
const cors = require('cors')
const fs = require('fs');
const path = require('path');
const url = require('url');
const jsonfile = require('jsonfile');
const csv2json = require('convert-csv-to-json');
const addLineAtTop = require('./utils/filesUtils');
const statsSociosDashboard = require('./utils/statsDashboard');
const app = express();
const port = 3000;

var corsOptions = {
  origin: "http://localhost:3000/"
};

app.use(cors());


//********************* */
// Multer Configuration
//********************* */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, 'tmp.csv');
  },
});

const upload = multer({ storage });

//******************* */
//Upload form endpoint
//******************* */
app.get("/", (req, res) => {
    //res.json({ message: "Welcome to the file upload form." });
    res.sendFile(path.join(__dirname, 'index.html'));
  });


//********************* */
// File Upload Endpoint
//********************* */
app.post('/uploadCsv', upload.single('fileName'), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: 'No ha cargado ningun archivo.' });
    }

    const headerCsv = 'Nombre;Edad;Equipo;EstadoCivil;NivelDeEstudios\n';
    addLineAtTop(req.file.path, headerCsv);

    let jsonData = csv2json.getJsonFromCsv(req.file.path);
    
    const jsonStats = statsSociosDashboard(jsonData);
    
    const outStats = JSON.stringify(statsSociosDashboard(jsonData));

    fs.writeFile('stats/outStats.json', outStats, 'utf8', (err) => { 
        if (err) throw err;
    });
        
    res.json(jsonStats);
});

//********************* */
// JSON stats Endpoint
//********************* */
app.get('/stats', (req, res) => {  
  const stats = jsonfile.readFileSync('stats/outStats.json');
  res.json(stats);
});

  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



