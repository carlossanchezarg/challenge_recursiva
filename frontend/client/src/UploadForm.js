import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './App.css';

const UPLOADCSV_API =  'http://localhost:3000/uploadCsv';

function FormUpload(props) {
  //const [csvData, setCsvData] = useState([]);

  const formData = new FormData();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    
    formData.append('fileName', file);
  }
  
  
  const navigate = useNavigate();

  const uploadFile= async () => {  
    const myFile = document.querySelector("input[type=file]").files[0];
    const data = new FormData();
    data.append("fileName", myFile);
    await fetch(UPLOADCSV_API, {
        method: "POST",
        body: data
    });
    
    navigate('dashboard/');
 }
 
  
  return (
    <Container fluid className="UploadForm">
      <div className="upload-container">
        <Card className="upload-card">
          <Card.Body>
            <Card.Title className="upload-title">Cargar archivo CSV</Card.Title>
            <Form className="upload-form">
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control type="file" accept=".csv" onChange={handleFileChange} />
              </Form.Group>
            </Form>
            <Button variant="primary" onClick={uploadFile} type="upload-button">Enviar</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="footer">
        {/* Footer content */}
      </div>
    </Container>
  );
}

export default FormUpload;