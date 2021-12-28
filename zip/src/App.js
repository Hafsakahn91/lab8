import React from 'react'
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      clicked: ''
    }
  }
  
  increase = () => {
    this.setState({
      count: this.state.count + 1, 
      clicked: 'increase'
    })
  }

  decrease = () => {
    this.setState({
      count: this.state.count - 1,
      clicked: 'decrease'
    })
  }
  
  render() {
    return(
      <div className="countContainer">
        <p>Click Away!</p>
        <div className="buttons">
          <button 
            className="increase"
            onClick={this.increase}>&#43;</button>
          <button 
            className="decrease"
            onClick={this.decrease}>&ndash;
          </button>
        </div>
        <Counter count={this.state.count} clicked={this.state.clicked}/>
      </div>
    )
  }
  
}

export default App;
