import React, { useEffect } from 'react';
import {
  StyledMainTitle,
  StyledMainWrapper,
  StyledTitle,
  StyledWrapper,
} from './Phonebook.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataThunk } from 'components/redux/operations';
import { selectIsLoading } from 'components/redux/slice';

const Phonebook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);
  const loading = useSelector(selectIsLoading);

  return (
    <StyledMainWrapper>
      <StyledMainTitle>My Phonebook</StyledMainTitle>
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
