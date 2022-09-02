import React from 'react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import './css/normalize.css';
import './css/portfolio.css';
import './css/webflow.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    
      <Router>
        <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/about" exact element={<AboutPage />}/>
        </Routes>
        </div>
      </Router>
  );
}

export default App;
