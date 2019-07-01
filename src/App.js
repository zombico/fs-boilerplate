import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import './App.css';
import Demo from './components/Demo';

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
        </>
      </Router>
      </div>
    );
  }
}

export default App;
