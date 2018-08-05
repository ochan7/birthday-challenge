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
    if (isDateLessThanNow(enteredDate)) {
      this.setState({
        birthday: formatDate(enteredDate),
      });
    } else {
      this.setState({
        birthday: '',
      });
    }
  }
  render() {
    return (
      <form className="form" onSubmit={evt => evt.preventDefault()}>
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
          value={this.state.birthday}
          onChange={this.handleDateChange}
        />
        <button
          onClick={() => {
            this.props.handleSubmit(this.state);
            this.setState({ name: '', birthday: '' });
          }}
          disabled={this.state.name === '' || this.state.birthday === ''}
        >
          Submit
        </button>
      </form>
    );
  }
}
