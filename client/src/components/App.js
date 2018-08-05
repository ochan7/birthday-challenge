import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { loadData } from '../lib/service';
import { BirthdayList } from './BirthdayList';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    loadData().then(({ data }) => this.setState({ data }));
  }
  render() {
    return (
      <Router>
        <div className="App">
          <header className="header">
            <h1>Birthdays</h1>
          </header>
          <section className="main">
            <BirthdayList birthdays={this.state.data} />
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
