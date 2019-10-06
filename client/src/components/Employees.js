import React, { Component } from 'react';
import axios from 'axios'

class Employees extends Component {

  state = {
    employees:[]
  }

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    fetch('/api')
    .then(res => res.json())
    .then(employees => this.setState({ employees }));
    console.log(this.state.employees)
  }
  
  render() {
    const {employees} = this.state;
  
    return (
      <div>
        {employees.length ? <ul>
          {employees.map((employee,i)=>
            <li key={i}>
              {employee}
            </li>
          )}
        </ul>: <p>No employees</p>}
        
        
      </div>
    );
  }
}

export default Employees;