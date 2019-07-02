import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import './App.css';
import Demo from './components/Demo';
import DemoData from './components/DemoData';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Router>
        <>
          <Route
            exact path="/demo"
            render={() => <Demo /> }
          />
          <Route
            exact path="/demodata"
            render={() => <DemoData /> }
          />
        </>
      </Router>
      </div>
    );
  }
}

export default App;
