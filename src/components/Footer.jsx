import { Container, Row, Col, Nav } from 'react-bootstrap';

import { 
  GraduationCapIcon,
  HouseLineIcon,
  UserSquareIcon,
  EnvelopeSimpleIcon
} from '@phosphor-icons/react';

const Footer = () => {
  return (
    <footer
      className="bg-opacity-70 text-light py-4 mt-5"
      style={{ backgroundColor: '#003f69' }}
    >
      <Container>
        <Row>
          {/* Coluna esquerda */}
          <Col xs={12} md={5} className="mb-3 mb-md-0">
            <h5 className="d-flex align-items-center gap-2 mb-0">
              <GraduationCapIcon
                weight="fill"
                size="25"
              />
              Censo Escolar
            </h5>
          </Col>

          {/* Coluna direita */}
          <Col xs={12} md={6}>
            <h5 className="mb-3">Links úteis</h5>

            <Nav className="flex-column">
              <Nav.Link
                href="/"
                className="text-light d-flex align-items-center gap-2 mb-2"
              >
                <HouseLineIcon size="32" />
                Home
              </Nav.Link>

              <Nav.Link
                href="/sobre"
                className="text-light d-flex align-items-center gap-2 mb-2"
              >
                <UserSquareIcon size="32" />
                Sobre
              </Nav.Link>

              <Nav.Link
                href="/contato"
                className="text-light d-flex align-items-center gap-2"
              >
                <EnvelopeSimpleIcon size="32" />
                Contato
              </Nav.Link>
            </Nav>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />

        {/* Rodapé inferior */}
        <Row>
          <Col className="text-center">
            © {new Date().getFullYear()} Censo Escolar - IFPB - Todos os
            direitos reservados.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
