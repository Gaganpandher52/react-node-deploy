import React, { Component } from 'react';
import axios from 'axios'


class Employees extends Component {
  
  state = {
    employees:[],
    id:[],
    cs:['monday','monday','tuesday','friday','thursday']
    // title:'Employees'
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
        {this.state.employees.length ? <ol>
          {this.state.employees.map((employee,i)=>
            <li key={i}>
              {employee}<button style={{marginLeft:'15px',}}>Check schedule</button>
            </li>
          )}
        </ol>: <p>No employees</p>}
      </div>
  );
  dosomethingelse = () => (
    <div>
        {this.state.id.length ? <div>
          {this.state.id.map((employee,i)=>
            <p key={i}>
              {employee}: <span>employee id</span>
            </p>
          )}
        </div>: <p>No employees</p>}
      </div>
  );

  
  
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
        <h2 style={{margin:'10px 0px 20px 20px',color:'blue',textAlign:'left'}}>List of Employees:</h2>
        <h3 style={{textAlign:'left'}} onChange={console.log('clicked')}>
          {this.dosomething()}
        </h3>
        {/* {this.dosomethingelse()} */}

        <p onClick={this.changeTitle}>{this.state.title}</p>
       
       
        
      </div>
    );
  }
}

export default Employees;