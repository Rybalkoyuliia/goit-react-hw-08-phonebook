import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  StyledMainNavTitle,
  StyledNavDirections,
  StyledNavDirectionsWrapper,
  StyledNavWrapper,
} from './Navigation.styled';

const Navigation = () => {
  return (
    <StyledNavWrapper>
      <StyledMainNavTitle>
        Welcome to <br />
        <span>My Phonebook</span>{' '}
      </StyledMainNavTitle>
      <StyledNavDirectionsWrapper>
        <StyledNavDirections>
          Please, <NavLink to="/login">login</NavLink> to access your list of
          contacts
        </StyledNavDirections>
        <StyledNavDirections>
          Don't have any account yet? Please{' '}
          <NavLink to="/register">register</NavLink>
        </StyledNavDirections>
      </StyledNavDirectionsWrapper>
    </StyledNavWrapper>
  );
};

export default Navigation;
