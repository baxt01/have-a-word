import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import * as bootstrap from 'bootstrap';
require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)
