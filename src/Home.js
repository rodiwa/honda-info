import {
  NavLink
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons';

import T1 from './assets/images/t1.jpeg';
import T2 from './assets/images/t2.jpeg';

import './App.css';

import {
  SUMMARY_ITEMS_COL1,
  SUMMARY_ITEMS_COL2,
  ALERT_TIP,
  FAQ_CONTENT_COL1,
  FOOTER_NOTE_1,
  FOOTER_NOTE_2,
  FOOTER_NOTE_3,
  SUMMARY_TEXT,
  FAQ_TEXT,
  CONTACT_TEXT,
  IMAGE_TEXT,
} from './data/messages';

const EMAIL = process.env.REACT_APP_EMAIL;
const PHONE = process.env.REACT_APP_PHONE;

function Home() {
  return (
    <Container fluid>
      <Row>
        <h1>Summary</h1>
        <div className="text-center">{SUMMARY_TEXT}</div>
      </Row>
      <Row>
        <Col xs={12} md>
          <ListGroup className="summary-col1">
            { SUMMARY_ITEMS_COL1.map((item) => <ListGroup.Item><li>{ item }</li></ListGroup.Item>) }
          </ListGroup>
        </Col>
        <Col xs={12} md>
          <ListGroup>
            { SUMMARY_ITEMS_COL2.map((item) => <ListGroup.Item><li>{ item }</li></ListGroup.Item>) }
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Alert key="info" variant="info">
            { ALERT_TIP }
          </Alert>
        </Col>
      </Row>
      <Row>
        <h1>Contact</h1>
        <div className="text-center">{CONTACT_TEXT}</div>
      </Row>
      <Row>
        <Col className="text-center">
          <FontAwesomeIcon icon={faAt} />
          &nbsp;
          { EMAIL }
        </Col>
        <Col className="text-center">
          <FontAwesomeIcon icon={faPhone} />
          &nbsp;
          { PHONE }
        </Col>
      </Row>
      <Row>
        <h1>Images</h1>
        <div className="text-center">{IMAGE_TEXT}</div>
      </Row>
      <Row>
        <Col className="text-center">
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
        <div className="text-center">{FAQ_TEXT}</div>
      </Row>
      <Row>
        <Col>
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            {
              FAQ_CONTENT_COL1.map((faq, idx) => (
                <Accordion.Item eventKey={idx}>
                  <Accordion.Header><b>{ faq.ques }</b></Accordion.Header>
                  <Accordion.Body>{ faq.ans }</Accordion.Body>
                </Accordion.Item>
              ))
            }
          </Accordion>
        </Col>
      </Row>
      <Row>
        <Col>
          <Alert key="info" variant="info">
            <div className="text-center"><li>{ FOOTER_NOTE_1 }</li></div>
            <div className="text-center"><li>{ FOOTER_NOTE_2 }</li></div>
            <div className="text-center"><li>{ FOOTER_NOTE_3 }</li></div>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
