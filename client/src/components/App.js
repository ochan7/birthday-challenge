import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { loadData, submitData, deleteData } from '../lib/service';
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
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    loadData().then(({ data }) => this.setState({ data }));
  }

  handleSubmit(newPerson) {
    submitData(newPerson).then(() =>
      this.setState({ data: [...this.state.data, newPerson] }),
    );
  }

  handleDelete(id) {
    deleteData(id).then(() =>
      this.setState({
        data: [
          ...this.state.data.slice(0, id),
          ...this.state.data.slice(id + 1),
        ],
      }),
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
                    this.state.data.map((val, id) => ({ ...val, id })),
                  )}
                  period={match.params.period}
                  handleDelete={this.handleDelete}
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
