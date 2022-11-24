import React from 'react';
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Zalozky from './components/Zalozky';
import Harmonika from './components/Harmonika';
import Tabulka from './components/Tabulka';

const App = () => {
  return (
    <>
    <Container>
      <Row>
        <Col xs={8}>
          <Zalozky />
          <Row>
            <Col xs={6}>
              <Tabulka />
            </Col>
            <Col xs={6}>
              
            </Col>
          </Row>
        </Col>
        <Col xs={4}>
          <Harmonika />
        </Col>
      </Row>
    </Container>
    </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
