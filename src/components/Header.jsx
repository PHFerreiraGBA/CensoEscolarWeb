import { Container, Nav, Navbar } from 'react-bootstrap';
import { GraduationCapIcon } from '@phosphor-icons/react';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <GraduationCapIcon
              style={{ marginRight: '3px' }}
              color="#2926DF"
              weight="fill"
              size="25" />{' '}
            Censo Escolar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="header-navbar" />
          <Navbar.Collapse id="header-navbar">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/instituicoesensino">
                <Nav.Link>Instituições Ensino</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
