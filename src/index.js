import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Add styles directly to the html and body elements
document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.body.style.margin = '0';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
