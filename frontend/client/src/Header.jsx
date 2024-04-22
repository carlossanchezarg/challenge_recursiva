import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import RecursivaIcon from './assets/LogoRecursiva.png'

function Header() {
  return (
      <Navbar className="bg-secondary bg-gradient">
        <Container>
          <Navbar.Brand href="#home">
          <img src={RecursivaIcon}  
                     width="" height="50" 
                     alt="Logo" /> 
            
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default Header;


