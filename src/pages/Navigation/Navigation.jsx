import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <h2>
        Welcome to <br />
        <span>My Phonebook</span>{' '}
      </h2>
      <p>
        Please, <NavLink to="/login">login</NavLink> to access your list of
        contacts
      </p>
      <p>
        Don't have any account yet? Please{' '}
        <NavLink to="/register">register</NavLink>
      </p>
      <NavLink to="/phonebook">Contacts</NavLink>
    </div>
  );
};

export default Navigation;
