import React, { Component } from 'react';
import axios from 'axios'

class Employees extends Component {
  
  state = {
    employees:[],
    id:[],
  }

  componentDidMount() {
    this.getEmployees();
    this.getEmployeesid();
  }

  changeTitle = () => {
    this.setState({ employees: this.state.employees.length });
 };

  getEmployees = () => {
    fetch('/api')
    .then(res => res.json())
    .then(employees => this.setState({ employees }));
  }
  getEmployeesid = () => {
    fetch('/api2.0')
    .then(res => res.json())
    .then(id => this.setState({ id }));
  }
  dosomething = () => (
    <div>
        {/* prints out employee name using map */}
        {this.state.employees.length ? <ol>
          {this.state.employees.map((employee,i)=>
            <li key={i}>
              {employee}<button style={{marginLeft:'15px',}}>Check schedule</button>
            </li>
          )}
        </ol>: <p>No employees</p>}
      </div>
  );
  render() {
    return (
      <div style={{float:'left'}}>
        <h2 style={{margin:'10px 0px 20px 20px',color:'blue',textAlign:'left'}}>List of Employees:</h2>
        <h3 style={{textAlign:'left'}} onChange={console.log('clicked')}>
          {this.dosomething()}
        </h3>
        <p onClick={this.changeTitle}>{this.state.title}</p>
      </div>
    );
  }
}

export default Employees;