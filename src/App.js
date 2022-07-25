import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Images from './Images';
import Home from './Home';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/images" element={<Images />} />
      </Routes>
    </Router>
  );
}

export default App;
