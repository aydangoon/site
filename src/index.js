import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <Router basename='/site'>
            <App />
        </Router>
    </React.StrictMode>,
  document.getElementById('root')
);
