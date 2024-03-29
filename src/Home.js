import {
  NavLink
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons';

import h1 from './assets/images/full/h1.webp';
import h2 from './assets/images/full/h2.webp';
import h3 from './assets/images/full/h3.webp';
import h4 from './assets/images/full/h4.webp';
import h5 from './assets/images/full/h5.webp';
import h6 from './assets/images/full/h6.webp';
import h7 from './assets/images/full/h7.webp';
import h8 from './assets/images/full/h8.webp';
import h9 from './assets/images/full/h9.webp';
import h10 from './assets/images/full/h10.webp';
import h11 from './assets/images/full/h11.webp';
import h12 from './assets/images/full/h12.webp';
import h13 from './assets/images/full/h13.webp';
import h14 from './assets/images/full/h14.webp';
import h15 from './assets/images/full/h15.webp';
import h16 from './assets/images/full/h16.webp';
import h17 from './assets/images/full/h17.webp';
import h18 from './assets/images/full/h18.webp';

import './App.css';

import {
  SUMMARY_ITEMS_COL1,
  SUMMARY_ITEMS_COL2,
  ALERT_TIP,
  FAQ_CONTENT_COL1,
  FOOTER_NOTE_1,
  FOOTER_NOTE_2,
  FOOTER_NOTE_3,
  QUICK_SUMMARY_TEXT,
  SERVICE_SUMMARY_TEXT,
  FAQ_TEXT,
  CONTACT_TEXT,
  IMAGE_TEXT
} from './data/messages';

const EMAIL = process.env.REACT_APP_EMAIL;
const PHONE = process.env.REACT_APP_PHONE;

function Home() {
  return (
    <Container fluid>
      <Row>
        <h1 data-testid="summary-header">Quick Summary</h1>
        <div className="text-center">{QUICK_SUMMARY_TEXT}</div>
      </Row>
      <Row>
        <Col>
          <Alert key="danger" variant="danger">
            <div className="text-center">
              The car is no longer available! Thank you for your interest!
            </div>
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table bordered striped hover>
            <tbody>
              {
                [...SUMMARY_ITEMS_COL1].map((item) => (
                  <tr>
                    <td>{ item }</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          <Alert key="info" variant="info">
            <div className="text-center">
              <a target="_blank" rel="noreferrer" href="https://www.carwale.com/honda-cars/city-2014-2017/v/">Click here</a>
              &nbsp;to see the original full vehicle spec.
            </div>
          </Alert>
        </Col>
      </Row>
      <Row>
        <h1 data-testid="contact-header">Contact</h1>
        <div className="text-center">{CONTACT_TEXT}</div>
      </Row>
      <Row>
        <Col className="text-center">
          <Table bordered>
            <tbody>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faAt} />
                  &nbsp;
                  { EMAIL }
                </td>
                <td>
                  <FontAwesomeIcon icon={faPhone} />
                  &nbsp;
                  { PHONE }
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <h1 data-testid="images-header">Images</h1>
        <div className="text-center">{IMAGE_TEXT}</div>
      </Row>
      <Row>
        <Col className="text-center">
          <NavLink to="/images"><img src={h11} className="car-image-thumb" alt="logo" /></NavLink>
          <NavLink to="/images"><img src={h2} className="car-image-thumb" alt="logo" /></NavLink>
          <NavLink to="/images"><img src={h7} className="car-image-thumb" alt="logo" /></NavLink>
          <NavLink to="/images"><img src={h17} className="car-image-thumb" alt="logo" /></NavLink>
          <NavLink to="/images"><img src={h13} className="car-image-thumb" alt="logo" /></NavLink>
          <NavLink to="/images"><img src={h3} className="car-image-thumb" alt="logo" /></NavLink>
        </Col>
      </Row>
      <Row>
        <h1 data-testid="summary-header">Service Summary</h1>
        <div className="text-center">{SERVICE_SUMMARY_TEXT}</div>
      </Row>
      <Row>
        <Col>
          <Table bordered striped hover>
            <tbody>
              {
                [...SUMMARY_ITEMS_COL2].map((item) => (
                  <tr>
                    <td>{ item }</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
          &nbsp;
          <div className="text-center">
            <Alert key="info" variant="info">
              { ALERT_TIP }
            </Alert>
          </div>
        </Col>
      </Row>
      <Row>
        <h1 data-testid="faq-header">FAQ</h1>
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
