import React from 'react';
import {
  ListWrapper,
  SpanWrapper,
  StyledDelButton,
  StyledLiWrapper,
  StyledName,
  StyledNumber,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  filteredContacts,
  selectContacts,
  selectIsLoading,
} from '../../redux/contacts/slice';
import { deleteDataThunk } from '../../redux/contacts/operations';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(filteredContacts);

  const handleFilteredList = () => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  };
  const loading = useSelector(selectIsLoading);

  return loading ? (
    <h2>Loading...</h2>
  ) : (
    <ListWrapper>
      {handleFilteredList()
        .toSorted((a, b) => a.name.localeCompare(b.name))
        .map(({ id, name, number }) => (
          <StyledLiWrapper key={id}>
            <SpanWrapper>
              <StyledName>{name}</StyledName>
              <StyledNumber>{number}</StyledNumber>
            </SpanWrapper>
            <StyledDelButton onClick={() => dispatch(deleteDataThunk(id))}>
              Delete
            </StyledDelButton>
          </StyledLiWrapper>
        ))}
    </ListWrapper>
  );
}
