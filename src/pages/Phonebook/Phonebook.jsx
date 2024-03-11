import React, { useEffect } from 'react';
import {
  StyledLogoutBtn,
  StyledMainTitle,
  StyledMainWrapper,
  StyledTitle,
  StyledWrapper,
} from './Phonebook.styled';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchDataThunk } from '../../redux/contacts/operations';
import { selectIsLoading } from '../../redux/contacts/slice';
import { logoutThunk } from '../../redux/auth/authOperations';
import ContactForm from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { setIsLoggedIn } from '../../redux/auth/authSlice';

const Phonebook = () => {
  const navigate = useNavigate();
  const user = useSelector(setIsLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    user && dispatch(fetchDataThunk());
  }, [dispatch, user]);
  const loading = useSelector(selectIsLoading);

  return (
    <StyledMainWrapper>
      <StyledMainTitle>My Phonebook</StyledMainTitle>
      <StyledLogoutBtn
        onClick={() => {
          dispatch(logoutThunk());
          navigate('/');
        }}
      >
        Logout
      </StyledLogoutBtn>
      <StyledWrapper>
        <ContactForm />
      </StyledWrapper>

      <StyledWrapper>
        <StyledTitle>Contacts</StyledTitle>
        <Filter />
      </StyledWrapper>
      {loading ? <h2>Loading...</h2> : <ContactList />}
    </StyledMainWrapper>
  );
};

export default Phonebook;
