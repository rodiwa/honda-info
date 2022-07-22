import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import T1 from './assets/images/t1.jpeg';
import T2 from './assets/images/t2.jpeg';

import './App.css';

function Images() {
  return (
    <div className="App">
      <div>
        <p>
          Images!
        </p>
        <NavLink to="/">Home</NavLink>
        <img src={T1} className="car-image-full" alt="logo" />
        <img src={T2} className="car-image-full" alt="logo" />
        <img src={T1} className="car-image-full" alt="logo" />
        <img src={T2} className="car-image-full" alt="logo" />
        <img src={T1} className="car-image-full" alt="logo" />
        <img src={T2} className="car-image-full" alt="logo" />
      </div>
    </div>
  );
}

export default Images;
