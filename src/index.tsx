import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom"
import { GoogleKeepProvider } from './Context/GoogleKeepProvider';
import { AuthProvider } from './Context/AuthProvider';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <AuthProvider>
      <GoogleKeepProvider>
    <App />
    </GoogleKeepProvider>
    </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
