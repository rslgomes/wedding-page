import React from 'react';
import '../globals.css';
import Hero from '../components/Layout/Hero';
import NavLike from '../components/Layout/NavLike';

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-primary-100 ">
      <NavLike />
      <Hero />
      <div className="flex-grow p-4">{children}</div>
    </div>
  );
};

export default Layout;
