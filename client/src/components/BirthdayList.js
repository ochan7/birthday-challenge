import React from 'react';
import PropTypes from 'prop-types';

const BirthdayItem = props => (
  <li className="list">
    <label>{props.name}</label>
    <p>{props.birthday}</p>
    <button onClick={() => props.handleDelete(props.id)}>Delete</button>
  </li>
);

export const BirthdayList = props => (
  <ul>
    {props.birthdays
      .sort((a, b) => new Date(b.birthday) - new Date(a.birthday))
      .map(person => (
        <BirthdayItem
          key={person.id}
          name={person.name}
          id={person.id}
          birthday={person.birthday}
          handleDelete={props.handleDelete}
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
