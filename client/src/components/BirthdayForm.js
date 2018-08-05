import React from 'react';

export class BirthdayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      birthday: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.setState({ name: evt.target.value });
  }
  render() {
    return (
      <form className="form">
        <input
          className="text-input"
          type="text"
          placeholder="Enter a name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input className="date-picker" type="date" />
      </form>
    );
  }
}
