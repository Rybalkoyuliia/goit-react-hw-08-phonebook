import Form from 'components/Form/Form';
import { loginThunk } from '../../redux/auth/authOperations';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = data => {
    dispatch(loginThunk(data))
      .unwrap()
      .then(() => {
        navigate('/phonebook');
      })
      .catch(error => navigate('/NotFound'));
  };
  return (
    <div>
      <Form formType={'login'} onDataSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
