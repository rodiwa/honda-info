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

function Home() {
  return (
    <div className="App">
      <div>
        <p>
          Car Images!
        </p>
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
      </div>
    </div>
  );
}

export default Home;
