import React from 'react';
import { Link } from 'react-router-dom';

export const BirthdayHeader = () => (
  <header className="header">
    <h1>Birthday manager</h1>
    <ul>
      <li>
        <Link to="/all">All</Link>
      </li>
      <li>
        <Link to="/upcoming">Upcoming</Link>
      </li>
      <li>
        <Link to="/today">Today</Link>
      </li>
    </ul>
  </header>
);
