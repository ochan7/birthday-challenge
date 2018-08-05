import React from 'react';
import PropTypes from 'prop-types';

const BirthdayItem = props => (
  <li key={props.index} className="list">
    <label>{props.name}</label>
    <p>{props.birthday}</p>
  </li>
);

export const BirthdayList = props => (
  <ul>
    {props.birthdays
      .sort((a, b) => new Date(b.birthday) - new Date(a.birthday))
      .map(person => (
        <BirthdayItem
          name={person.name}
          key={person.id}
          birthday={person.birthday}
        />
      ))}
  </ul>
);

BirthdayItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  birthday: PropTypes.string,
};

BirthdayList.propTypes = {
  birthdays: PropTypes.arrayOf(PropTypes.object),
};
