import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill, BsFillPersonVcardFill}
 from 'react-icons/bs'
 //import racingIcon from './assets/racingIcon.png'
 import Toast from 'react-bootstrap/Toast';
 import Table from 'react-bootstrap/Table';
 import ListGroup from 'react-bootstrap/ListGroup';

 
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
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>NRO DE SOCIOS</h3>
                    <BsFillPersonVcardFill className='card_icon'/>
                </div>
                <h1>{stats.nroSocios}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PROMEDIO DE EDAD SOCIOS DE RACING</h3>
                    <racingIcon className='card_icon'/>
                </div>
                <h1>{stats.edadAvgSociosRacing}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>TOP 5: NOMBRES HINCHAS DE RACING</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <ListGroup>
                {stats.top5NombresRacing &&
                        (stats.top5NombresRacing).map((lista, index) => (
                            <ListGroup.Item>{lista.nombre}</ListGroup.Item>
                        ))}
                </ListGroup>
                
            </div>
        
         
    <Toast>
      <Toast.Header>
      <strong className="me-auto">Etadisticas socios por equipo</strong>
      </Toast.Header>
      <Toast.Body>
      <div className='card'>    
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Equipo</th>
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
              <td> {equipo.edadAvg}</td>
              <td>{equipo.edadMin}</td> 
              <td>{equipo.edadMax}</td>
            </tr>
           ))}
    </tbody>
    </Table>
    </div>
    </Toast.Body>
    </Toast>
    </div>  
    
    <Toast>
      <Toast.Header>
      <strong className="me-auto">100 personas mas jovenes</strong>
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
  
    </main>
  )
}

export default Home

