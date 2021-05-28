import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import ThemeContext from './context/ThemeContext';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
  <ThemeContext>
    <App />
  </ThemeContext>
  , document.getElementById('root')
);