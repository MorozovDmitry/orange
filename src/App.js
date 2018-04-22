import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './my-component.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Orange</h1>
        </header>
        <p className="App-intro">
          Telegram is forgotten in the WORLD
        </p>
        <MyComponent/>
      </div>
    );
  }
}

export default App;
