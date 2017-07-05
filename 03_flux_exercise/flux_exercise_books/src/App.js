import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import Routes from "./Routes"

class App extends Component {
  render() {
    return (
        <div className="App">

      <div className="App-header">
        <Header/>
      </div>

      <Routes/>
        </div>
    );
  }
}

export default App;
