import React from 'react';
import { isDateLessThanNow, formatDate } from '../lib/utils';

export class BirthdayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      birthday: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }
  handleChange(evt) {
    this.setState({ name: evt.target.value });
  }
  handleDateChange(evt) {
    const enteredDate = new Date(evt.target.value);
    const presentDate = new Date();
    if (isDateLessThanNow(enteredDate, presentDate)) {
      this.setState({
        birthday: formatDate(enteredDate),
      });
    }
  }
  render() {
    return (
      <form
        className="form"
        onSubmit={() => this.props.handleSubmit(this.state)}
      >
        <input
          className="text-input"
          type="text"
          placeholder="Enter a name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          className="date-picker"
          type="date"
          onChange={this.handleDateChange}
        />
      </form>
    );
  }
}
