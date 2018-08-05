import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { loadData, submitData } from '../lib/service';
import { BirthdayList } from './BirthdayList';
import { filterBirthdays } from '../lib/utils';
import { BirthdayHeader } from './BirthdayHeader';
import { BirthdayForm } from './BirthdayForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    loadData()
      .then(({ data }) =>
        data.map((val, id) => {
          val.id = id;
          return val;
        }),
      )
      .then(data => this.setState({ data }));
  }

  handleSubmit(newPerson) {
    submitData(newPerson).then(() =>
      this.setState({ data: [...this.state.data, newPerson] }),
    );
  }
  render() {
    return (
      <Router>
        <div className="App">
          <BirthdayHeader />
          <section className="main">
            <BirthdayForm handleSubmit={this.handleSubmit} />
            <Route
              path="/:period?"
              render={({ match }) => (
                <BirthdayList
                  birthdays={filterBirthdays(
                    match.params.period,
                    this.state.data,
                  )}
                />
              )}
            />
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
