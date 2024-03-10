import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Navigation from '../pages/Navigation/Navigation';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Phonebook from '../pages/Phonebook/Phonebook';
import NotFound from '../pages/NotFound/NotFound';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigation />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="phonebook" element={<Phonebook />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
