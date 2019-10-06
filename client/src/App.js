import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import NewNavbar from './components/navbar'
import Employees from './components/Employees'


function App() {

  // const [user, setUser] = React.useState(null);

  // React.useEffect(() =>{
  //   axios.get('/api').then(response =>{
  //       setUser(response.data)
  //     }) 
  // },[])


 
  return (
     (
    <div className="App">
      <header className="App-header">
        <NewNavbar/>
      </header>
      <Employees/>
      <p>
          {/* {JSON.stringify(user)} */}
        </p>
    </div>
  ));
}

export default App;
 