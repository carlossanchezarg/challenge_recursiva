import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import 
{ BsFillPersonVcardFill}
 from 'react-icons/bs'
 import RacingIcon from './assets/RacingIcon.png'
 import Table from 'react-bootstrap/Table';
 import ListGroup from 'react-bootstrap/ListGroup';
 import Accordion from 'react-bootstrap/Accordion';
 
function Home() {

    const [stats, setStats] = useState([])
    useEffect(() => {
      axios.get('http://localhost:3000/stats')
        .then((res) => {
          setStats(res.data);
        })
    }, [])

  return (

    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD: ESTADÍSTICAS DE LOS SOCIOS DEL CLUB</h3>
        </div>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>
        <strong className="me-auto"> TOP 100 por edad: Socios casados con estudios univ.</strong>
        </Accordion.Header>
        <Accordion.Body>
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
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
        <strong className="me-auto"> Estadísticas: socios por equipo</strong>
        </Accordion.Header>
        <Accordion.Body>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Equipo</th>
          <th>Nro. de socios</th>
          <th>Edad promedio</th>
          <th>Menor edad</th>
          <th>Mayor edad</th>
        </tr>
      </thead>
      <tbody>
      {stats.statsEquiposList &&
          (stats.statsEquiposList).map((equipo, index) => (
            <tr>
               <td>{index+1} </td>
              <td>{equipo.equipo} </td>
              <td>{equipo.nroSocios} </td>
              <td> {equipo.edadAvg}</td>
              <td>{equipo.edadMin}</td> 
              <td>{equipo.edadMax}</td>
            </tr>
           ))}
    </tbody>
    </Table>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>NRO. DE SOCIOS</h3>
                    <BsFillPersonVcardFill className='card_icon'/>
                </div>
                <h1>{stats.nroSocios}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PROMEDIO DE EDAD: SOCIOS DE RACING</h3>
                    <img src={RacingIcon}  
                     width="50" height="50" 
                     alt="Logo" /> 
                   
                </div>
                <h1>{stats.edadAvgSociosRacing}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>TOP 5: NOMBRES REPETIDOS DE HINCHAS DE RACING</h3>
                    <img src={RacingIcon}  
                     width="50" height="50" 
                     alt="Logo" /> 
                </div>
                <ListGroup>
                {stats.top5NombresRacing &&
                        (stats.top5NombresRacing).map((lista, index) => (
                            <ListGroup.Item>{lista.nombre}</ListGroup.Item>
                        ))}
                </ListGroup>
                
            </div>   
    </div>  
    
    </main>

    
  )
}

export default Home;

