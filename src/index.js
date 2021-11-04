import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//this page will take everything from the app.ja page and dynamically generate it to the front end index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


