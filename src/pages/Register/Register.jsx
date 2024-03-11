import Form from 'components/Form/Form';
import { registerThunk } from 'components/redux/auth/authOperations';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleSubmit = data => {
    dispatch(registerThunk(data));
    navigation('/login');
  };
  return (
    <div>
      <Form onDataSubmit={handleSubmit} formType={'register'} />
    </div>
  );
};

export default Register;
