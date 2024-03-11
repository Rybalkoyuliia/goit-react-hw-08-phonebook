import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Phonebook from '../pages/Phonebook/Phonebook';
import NotFound from '../pages/NotFound/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from '../redux/auth/authOperations';
import { setIsRefreshing } from '../redux/auth/authSlice';

const App = () => {
  const refresh = useSelector(setIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return refresh ? (
    <h1>Loading</h1>
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="phonebook" element={<Phonebook />} />
      </Routes>
    </div>
  );
};

export default App;
