import {
  Button,
  Col,
  Form,
  OverlayTrigger,
  Row,
  Table,
  Tooltip,
} from 'react-bootstrap';
import { PlusIcon, MagnifyingGlassIcon } from '@phosphor-icons/react';
import CensoEscolar from '../datasets/CensoEscolar.json';

const InstituicaoEnsino = () => {
  const buscarHandleClick = (event) => {};

  const handleClickAdicionarIE = (event) => {
    console.log('Adionando uma IE');
  };

  const top10 = [...CensoEscolar]
    .sort((a, b) => b.QT_MAT_BAS - a.QT_MAT_BAS)
    .slice(0, 10);

  return (
    <>
      <Row className="pt-4 mb-4">
        <Col xs="10" lg="10">
          <Form.Control type="text" placeholder="Busca" />
        </Col>
        <Col xs="2" lg="2" className="d-flex gap-2">
          <OverlayTrigger placement="top" overlay={<Tooltip>Buscar</Tooltip>}>
            <Button onClick={buscarHandleClick}>
              <MagnifyingGlassIcon weight="bold" />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Adicionar</Tooltip>}
          >
            <Button onClick={handleClickAdicionarIE}>
              <PlusIcon weight="bold" />
            </Button>
          </OverlayTrigger>
        </Col>
      </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Matrículas - Educação Básica</th>
          </tr>
        </thead>
        <tbody>
          {top10.map((escola, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{escola.NO_ENTIDADE}</td>
              <td>{escola.NO_MUNICIPIO}</td>
              <td>{escola.NO_UF}</td>
              <td>{escola.QT_MAT_BAS}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default InstituicaoEnsino;
