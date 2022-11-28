import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './app-component/screens/Home';
import PredictAge from './app-component/screens/PredictAge';
import './index.css';

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/predict-age' element={<PredictAge />} />
      </Routes>
    </Router>
  </>
)

export default App;
