import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {

  const [user, setUser] = React.useState(null);

  React.useEffect(() =>{
    axios.get('/api').then(response =>{
        setUser(response.data)
      }) 
  },[])


 
  return (
     (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {JSON.stringify(user)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ));
}

export default App;
 