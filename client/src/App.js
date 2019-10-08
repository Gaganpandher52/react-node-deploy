import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import NewNavbar from './components/navbar'
import Employees from './components/Employees'

function App() {
  return (
     (
    <div className="App">
      <header className="App-header">
        <NewNavbar/>
      </header>
        <Employees/>
    </div>
  ));
}

export default App;
 