import { Filter } from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import {
  StyledMainTitle,
  StyledMainWrapper,
  StyledTitle,
  StyledWrapper,
} from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchDataThunk } from './redux/operations';
import { selectIsLoading } from './redux/slice';

const App = () => {
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

export default App;
