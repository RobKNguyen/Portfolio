import React from 'react';
import HomePage from './components/HomePage';
import './css/normalize.css';
import './css/portfolio.css';
import './css/webflow.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
