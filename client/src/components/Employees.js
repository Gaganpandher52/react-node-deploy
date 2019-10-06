import React, { Component } from 'react';
import axios from 'axios'


class Employees extends Component {
  
  state = {
    employees:[],
    cs:['monday','monday','tuesday','friday','thursday'],
    title:'Employees'
  }

  componentDidMount() {
    this.getEmployees();
  }

  changeTitle = () => {
    this.setState({ title: this.state.employees.length });
 };

  getEmployees = () => {
    fetch('/api')
    .then(res => res.json())
    .then(employees => this.setState({ employees }));
  }
  dosomething = () => (
    <div>
        {this.state.employees.length ? <ul>
          {this.state.employees.map((employee,i)=>
            <li key={i}>
              {employee}<button style={{marginLeft:'15px'}}>Check schdule</button>
            </li>
          )}
        </ul>: <p>No employees</p>}
      </div>
  );
  dosomethingelse = () => {
    console.log('alkhfkjsahfka')
  };

  
  
  render() {
    const {employees} = this.state;
    
  
    return (
      <div style={{float:'left'}}>
        {/* {employees.length ? <ul>
          {employees.map((employee,i)=>
            <li key={i}>
              {employee}
            </li>
          )}
        </ul>: <p>No employees</p>} */}
        {/* <button onClick={}>Employees</button> */}
        <p>List of Employees:</p>
        {this.dosomething()}

        <p onClick={this.changeTitle}>{this.state.title}</p>
       
       
        
      </div>
    );
  }
}

export default Employees;