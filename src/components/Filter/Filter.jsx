import {
  StyledInput,
  StyledLabel,
} from 'components/ContactForm/ContactForm.styled';
import { filterContacts } from '../../redux/contacts/slice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilter = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div style={{ paddingRight: '15px' }}>
      <StyledLabel>
        Filter
        <StyledInput type="text" name="filter" onChange={onFilter} />
      </StyledLabel>
    </div>
  );
};
