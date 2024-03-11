import {
  LeftStyledList,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import InputMask from 'react-input-mask';
import { useState } from 'react';
import { selectContacts } from '../../redux/contacts/slice';
import { addDataThunk } from '../../redux/contacts/operations';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [mask, setMask] = useState('');
  const changeMask = e => {
    setMask(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const phone = e.target.elements.number.value;
    const name = e.target.elements.name.value;

    if (name.trim() === '' || phone.trim() === '') {
      return;
    }

    if (contacts.find(person => person.name === name)) {
      alert(`${name} is already in contacts!`);
      return;
    } else if (contacts.find(person => person.number === phone)) {
      alert(`${name}'s number "${phone}" is already in contacts!`);
      return;
    } else if (!validatePhoneNumber(e)) {
      alert(`Phone is invalid`);
      return;
    } else {
      dispatch(
        addDataThunk({
          name,
          number: phone,
        })
      );
    }

    const reset = () => {
      e.target.elements.name.value = '';
      setMask('');
    };
    reset();
  };

  const validatePhoneNumber = e => {
    const number = e.target.elements.number.value;
    const PhoneNumberPattern = new RegExp(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
    );
    return PhoneNumberPattern.test(number);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <LeftStyledList>
          <StyledLabel>
            Name
            <StyledInput type="text" name="name" required />
          </StyledLabel>
          <StyledLabel>
            Number
            <InputMask
              style={{
                height: '20px',
                borderRadius: '10px',
                border: 'none',
                padding: '2px 8px',
                outline: 'none',
              }}
              mask="999-999-9999"
              type="tel"
              name="number"
              value={mask}
              onChange={changeMask}
              placeholder="000-000-0000"
              required
            ></InputMask>
          </StyledLabel>
        </LeftStyledList>
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </>
  );
};

export default ContactForm;
