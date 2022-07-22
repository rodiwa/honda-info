import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';

import T1 from './assets/images/t1.jpeg';
import T2 from './assets/images/t2.jpeg';

import './App.css';

function Images() {
  return (
    <Container>
      <Row>
        <h1>Images</h1>
      </Row>
      <Row>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Images</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Row>
        <img src={T1} className="car-image-full" alt="logo" />
        <img src={T2} className="car-image-full" alt="logo" />
        <img src={T1} className="car-image-full" alt="logo" />
        <img src={T2} className="car-image-full" alt="logo" />
        <img src={T1} className="car-image-full" alt="logo" />
        <img src={T2} className="car-image-full" alt="logo" />
      </Row>
      <Row>
        <Col>
          <Button variant="primary" size="lg">
            Go Back Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Images;
