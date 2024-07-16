import React, { useState, useEffect } from 'react';
import '../globals.css';
import NavLike from '../components/Layout/NavLike';
import { PHOTO_LIST } from '../helpers/constants';
import { Photo as PhotoInterface } from '../helpers/types';

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % PHOTO_LIST.length
        );
        setVisible(true);
      }, 1800);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const currentImage: PhotoInterface = PHOTO_LIST[currentImageIndex];

  return (
    <div className="flex flex-col min-h-screen bg-primary-700 bg-opacity-20">
      <div className="relative flex flex-col items-center space-y-10 py-0">
        <div className="relative h-96 min-w-max">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className={`h-full w-auto object-cover filter-primary-scale fade-in ${
              visible ? 'visible' : ''
            }`}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-primary-700 bg-opacity-5 flex items-end justify-center text-secondary-500 text-8xl font-secondary text-nowrap">
            Renata e Rodrigo
          </div>
        </div>
      </div>
      <NavLike />
      <div className="flex-grow p-4">{children}</div>
    </div>
  );
};

export default Layout;
