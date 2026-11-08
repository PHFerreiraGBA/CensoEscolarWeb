import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Carrossel from '../components/Carrossel';

const Home = () => {
  let itensCarrossel = [
    {
      srcImagem:
        'https://plus.unsplash.com/premium_photo-1680807869780-e0876a6f3cd5?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      titulo: 'Nossas Salas de Aula',
      descricao:
        'Nos Institutos Federais você tem uma infraestrutura de laboratórios conformatável.',
    },
    {
      srcImagem:
        'https://images.unsplash.com/photo-1758270705031-ebd46917a454?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      titulo: 'Professores Qualificados',
      descricao: 'Professores com pós-graduação.',
    },
  ];
  return (
    <>
      {/* Carrossel */}
      <Carrossel itensCarrossel={itensCarrossel}></Carrossel>
      
      {/* Cards */}
      <Container className="mt-4 mb-5">
        <Row>
          {/* Card 1 */}
          <Col md={4} className="mb-3">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Ranking: Top 10 Escolas</Card.Title>
                <Card.Text>
                  Visualize as 10 instituições de ensino com o maior volume de matrículas básicas registradas no censo.
                </Card.Text>
                <Button href="/instituicoesensino" variant="primary" className="mt-auto">Ver Top 10</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col md={4} className="mb-3">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1778489769184-45868633c527?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Busca por Nome</Card.Title>
                <Card.Text>
                  Pesquise por instituições específicas ou filtre os dados por município para encontrar rapidamente o que precisa.
                </Card.Text>
                <Button href="/instituicoesensino" variant="primary" className="mt-auto">Buscar por Nome</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col md={4} className="mb-3">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src="https://plus.unsplash.com/premium_photo-1661688307556-61310f23a42c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Gestão de Instituições</Card.Title>
                <Card.Text>
                  Acompanhe a listagem completa das instituições cadastradas e adicione novos registros ao sistema facilmente.
                </Card.Text>
                <Button href="/instituicoesensino" variant="primary" className="mt-auto">Gerenciar Cadastradas</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
