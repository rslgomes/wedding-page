import React from 'react';
import '../globals.css';
import NavLike from '../components/Layout/NavLike';
import hero from '../assets/hero.png';

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full">
        <img
          src={hero}
          alt="Renata e Rodrigo"
          className="filter-primary-scale w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-primary-300 bg-opacity-30 flex items-center justify-center text-secondary-300 text-8xl font-secondary">
          Renata e Rodrigo
        </div>
      </div>
      <NavLike />
      <div className="flex-grow p-4">{children}</div>
    </div>
  );
};

export default Layout;
