import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: {}
    };
  }

  componentDidMount() {
    fetch('https://time-tracker-d3502.firebaseio.com/time/-KvDoHvUXL3b8oVGqenF.json?shallow=true')
    .then((response) => response.json())
    .then((response) => {
      this.setState({
        years: response
      });
    });
  }

  renderYears() {
    return Object.keys(this.state.years).map((item) => (
      <div key={item}>{item}</div>
    ));
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Time Tracker</h1>
        </header>
        <div>{this.renderYears()}</div>
      </div>
    );
  }
}

export default App;
