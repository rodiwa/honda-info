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
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

import T1 from './assets/images/t1.jpeg';
import T2 from './assets/images/t2.jpeg';

import './App.css';

function Home() {
  return (
    <Container>
      <Row>
        <h1>Summary</h1>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <h1>Images</h1>
      </Row>
      <Row>
        <Col>
          <NavLink to="/images"><img src={T1} className="car-image-thumb" alt="logo" /></NavLink>
          <NavLink to="/images"><img src={T2} className="car-image-thumb" alt="logo" /></NavLink>
          <NavLink to="/images"><img src={T1} className="car-image-thumb" alt="logo" /></NavLink>
          <NavLink to="/images"><img src={T2} className="car-image-thumb" alt="logo" /></NavLink>
          <NavLink to="/images"><img src={T1} className="car-image-thumb" alt="logo" /></NavLink>
          <NavLink to="/images"><img src={T2} className="car-image-thumb" alt="logo" /></NavLink>
          <NavLink to="/images"><img src={T1} className="car-image-thumb" alt="logo" /></NavLink>
          <NavLink to="/images"><img src={T2} className="car-image-thumb" alt="logo" /></NavLink>
          <NavLink to="/images"><img src={T1} className="car-image-thumb" alt="logo" /></NavLink>
          <NavLink to="/images"><img src={T2} className="car-image-thumb" alt="logo" /></NavLink>
        </Col>
      </Row>
      <Row>
        <h1>FAQ</h1>
      </Row>
      <Row>
        <Col>
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col>
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Accordion Item #3</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Accordion Item #4</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
      <Row>
        <h1>Contact</h1>
      </Row>
      <Row>
        <Col>
          Email
        </Col>
        <Col>
          Phone
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
