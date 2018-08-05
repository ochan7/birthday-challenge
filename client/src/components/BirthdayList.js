import React from 'react';
import PropTypes from 'prop-types';

const BirthdayItem = props =>
  <li key={props.index} className="list">
    <label>{props.name}</label>
  </li>

export const BirthdayList = props => 
  <ul>
    {props.birthdays.map((person, index) =>
      <BirthdayItem name={person.name} key={index}/>
    )}
  </ul>;

BirthdayItem.propTypes = {
  name: PropTypes.string
}

BirthdayList.propTypes = {
  birthdays: PropTypes.arrayOf(PropTypes.object)
}