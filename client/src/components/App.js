import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="header">
            <h1>Birthdays</h1>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
