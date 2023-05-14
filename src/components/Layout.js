import React from 'react';
import { Header, Footer } from './components_index';
import '../index.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
