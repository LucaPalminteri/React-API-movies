import React from 'react'
import App from './App'
import {createRoot} from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'


createRoot(
  document.getElementById('root')
)
.render(
  <Router>
    <App /> 
  </Router>
);

