import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//IMPORT BrowserRouter and rename it to Router
import { BrowserRouter as Router } from "react-router-dom";


// Higher Order Component AKA "HOC"

// higher order functions take functions as arguments
// Just like higher order functions, they take components as arguments

// named imports are designed to allow for mulitple imports from a single statement

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
