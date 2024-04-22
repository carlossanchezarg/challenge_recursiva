import { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import Toast from 'react-bootstrap/Toast'
import Table from 'react-bootstrap/Table';


const Axios = () => {
  const [stats, setStats] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/stats')
      .then((res) => {
        setStats(res.data);
      })
  }, [])
  
  return (
    <div>
      <div>
      <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Nro. de personas registradas</strong>
        <small></small>
      </Toast.Header>
      <Toast.Body>{stats.nroSocios}</Toast.Body>
    </Toast>
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Edad promedio de los socios de Racing</strong>
        <small></small>
      </Toast.Header>
      <Toast.Body>{stats.edadAvgSociosRacing}</Toast.Body>
    </Toast>
    <Toast>
      <Toast.Header>
      </Toast.Header>
      <Toast.Body>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Equipo</th>
        </tr>
      </thead>
      <tbody>
      {stats.personasCasadasConEstudiosList &&
          (stats.personasCasadasConEstudiosList).map((persona, index) => (
            <tr>
               <td>{index+1} </td>
              <td>{persona.Nombre} </td>
              <td> {persona.Edad}</td> 
              <td>{persona.Equipo}</td>
            </tr>
           ))}
    </tbody>
    </Table>
    </Toast.Body>
    </Toast>
      </div>
      <div></div>
      <div>
        <ul>
          {stats.personasCasadasConEstudiosList &&
          (stats.personasCasadasConEstudiosList).map((persona, index) => (
               <li key={index}>{persona.Nombre} - {persona.Edad} - {persona.Equipo}</li>
           ))}
        </ul>
        <ul>
          {stats.top5NombresRacing &&
          (stats.top5NombresRacing).map((lista, index) => (
               <li key={index}>{lista.nombre}</li>
           ))}
        </ul>
        <ul>
          {stats.statsEquiposList &&
          (stats.statsEquiposList).map((equipo, index) => (
               <li key={index}>{equipo.equipo} - {equipo.edadAvg} - {equipo.edadMin} - {equipo.edadMax}</li>
           ))}
        </ul>  
      </div>
    </div>
  );
};

export default Axios;

