import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import NewNavbar from './components/navbar'
import Employees from './components/Employees'
import Scheduleinfo from './components/ScheduleInfo'


function App() {
  return (
     (
    <div className="App">
      <header className="App-header">
        <NewNavbar/>
      </header>
        <Employees/>
        <Scheduleinfo/>
    </div>
  ));
}

export default App;
 