import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EasyAbc from './EasyAbc';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Easy ABC Game</h1>
        </header>
        <EasyAbc/>
      </div>
    );
  }
}

export default App;
