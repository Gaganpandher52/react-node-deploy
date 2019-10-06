import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Navbar from './components/navbar'


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
        
        <p>
          {JSON.stringify(user)}
        </p>
        
      </header>
    </div>
  ));
}

export default App;
 