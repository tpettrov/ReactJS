import React, { Component } from 'react';
import './App.css';
import Header from './components/common/Header'
import Routes from './components/common/Routes'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
        <Routes/>
      </div>
    );
  }
}

export default App;
