import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { IMAGE_PAGE_SUBTEXT } from './data/messages';

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

function Images() {
  return (
    <Container fluid>
      <Row>
        <h1 data-testid="image-header">Images</h1>
        <div className="text-center">{IMAGE_PAGE_SUBTEXT}</div>
      </Row>
      <Row>
        <Col>
          <img src={h2} className="car-image-full" alt="logo" />
          <img src={h11} className="car-image-full" alt="logo" />
          <img src={h13} className="car-image-full" alt="logo" />
          <img src={h3} className="car-image-full" alt="logo" />
          <img src={h7} className="car-image-full" alt="logo" />
          <img src={h10} className="car-image-full" alt="logo" />
          <img src={h8} className="car-image-full" alt="logo" />
          <img src={h15} className="car-image-full" alt="logo" />
          <img src={h14} className="car-image-full" alt="logo" />
          <img src={h6} className="car-image-full" alt="logo" />
          <img src={h12} className="car-image-full" alt="logo" />
          <img src={h5} className="car-image-full" alt="logo" />
          <img src={h17} className="car-image-full" alt="logo" />
          <img src={h4} className="car-image-full" alt="logo" />
          <img src={h1} className="car-image-full" alt="logo" />
          <img src={h18} className="car-image-full" alt="logo" />
          <img src={h9} className="car-image-full" alt="logo" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button href="/" variant="primary" size="lg">
            Go Back To Home Page
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Images;
