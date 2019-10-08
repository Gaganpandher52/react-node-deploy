import React, { Component } from 'react';

class ScheduleInfo extends Component {

  state ={
    chunk:[]

  }
  
  componentDidMount(){
    this.getSchedule()
  }

  getSchedule = () => {
    fetch('/solution')
    .then(res => res.json())
    .then(chunk => this.setState({ chunk }));
  }

  render() {
    return (
      <div>
        {this.state.chunk}
        
      </div>
    );
  }
}

export default ScheduleInfo;