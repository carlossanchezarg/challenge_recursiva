import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/assets/LogoRecursiva.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Challenge Recursiva
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default Header;


