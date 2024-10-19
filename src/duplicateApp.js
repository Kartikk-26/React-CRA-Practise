// Day 1 APP.JS
import logo from './logo.svg';
import './App.css';
import About from './screens/About';
import Contact from '../src/screens/Contact'
import Register from './screens/Register';

function App(){
  return(
    <div>
      <About />
      <Contact />
      <Register />
    </div>
  )
}


export default App;


// DAY 2 APP.JS

import React from 'react'
import Register from './screens/Register'

function App() {
  return (
    <div>
      <Register />
    </div>
  )
}

export default App

