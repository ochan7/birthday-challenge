import React from 'react';
import PropTypes from 'prop-types';

const BirthdayItem = props => (
  <li className="list">
    <label>{props.name}</label>
    <p>{props.birthday}</p>
    {(props.period === 'today' || props.period === 'upcoming') && (
      <p>
        Will be{' '}
        {new Date().getFullYear() - new Date(props.birthday).getFullYear()}
      </p>
    )}
    <button onClick={() => props.handleDelete(props.id)}>Delete</button>
  </li>
);

export const BirthdayList = props => (
  <ul>
    {props.birthdays
      .sort(
        (a, b) =>
          new Date(b.birthday).setFullYear(0) -
          new Date(a.birthday).setFullYear(0),
      )
      .map(person => (
        <BirthdayItem
          period={props.period}
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
  period: PropTypes.string,
};
