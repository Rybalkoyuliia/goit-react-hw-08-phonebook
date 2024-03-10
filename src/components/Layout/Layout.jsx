import Navigation from 'pages/Navigation/Navigation';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main>
      <Navigation />
      <Outlet />
    </main>
  );
};

export default Layout;
