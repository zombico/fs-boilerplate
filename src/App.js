import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fetcher from './components/Fetcher';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Fetcher />
      </div>
    );
  }
}

export default App;
