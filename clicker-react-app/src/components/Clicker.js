import React, { Component } from 'react';

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  counterMinus = () => {
    this.setState({
      count: this.state.count - 1 
    });
  }

  counterPlus = () => {
    this.setState({
      count: this.state.count + 1 
    });
  }

  counterReload = () => {
    this.setState({
      count: 0
    });
  }

    render() {
      return (
        <div className='clicker'>
            <p className="counter">{this.state.count}</p> 
            <button className="buttons btn plus" onClick = {this.counterPlus}>+</button>
            <button className="buttons btn reload" onClick = {this.counterReload}>↺</button>
            <button className="buttons btn minus" onClick = {this.counterMinus}>&minus;</button>  
        </div>
      );
    }
  }
  
  export default Clicker;