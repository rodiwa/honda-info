import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { IMAGE_PAGE_SUBTEXT } from './data/messages';

import h1 from './assets/images/full/h1.jpg';
import h2 from './assets/images/full/h2.jpg';
import h3 from './assets/images/full/h3.jpg';
import h4 from './assets/images/full/h4.jpg';
import h5 from './assets/images/full/h5.jpg';
import h6 from './assets/images/full/h6.jpg';
import h7 from './assets/images/full/h7.jpg';
import h8 from './assets/images/full/h8.jpg';
import h9 from './assets/images/full/h9.jpg';
import h10 from './assets/images/full/h10.jpg';
import i1 from './assets/images/full/i1.jpg';
import i2 from './assets/images/full/i2.jpg';
import i3 from './assets/images/full/i3.jpg';
import i4 from './assets/images/full/i4.jpg';
import i5 from './assets/images/full/i5.jpg';

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
          <img src={h9} className="car-image-full" alt="logo" />
          <img src={h8} className="car-image-full" alt="logo" />
          <img src={i2} className="car-image-full" alt="logo" />
          <img src={i3} className="car-image-full" alt="logo" />
          <img src={h7} className="car-image-full" alt="logo" />
          <img src={h4} className="car-image-full" alt="logo" />
          <img src={h1} className="car-image-full" alt="logo" />
          <img src={i1} className="car-image-full" alt="logo" />
          <img src={h3} className="car-image-full" alt="logo" />
          <img src={h2} className="car-image-full" alt="logo" />
          <img src={i4} className="car-image-full" alt="logo" />
          <img src={i5} className="car-image-full" alt="logo" />
          <img src={h5} className="car-image-full" alt="logo" />
          <img src={h6} className="car-image-full" alt="logo" />
          <img src={h10} className="car-image-full" alt="logo" />
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
