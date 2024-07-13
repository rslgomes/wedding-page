import React from 'react';
import '../globals.css';
import NavLike from '../components/Layout/NavLike';
import PhotoStack from '../components/Layout/PhotoStack/PhotoStack';

const images = [
  { src: 'https://picsum.photos/400/300?random=1', alt: 'Photo 1' },
  { src: 'https://picsum.photos/400/300?random=2', alt: 'Photo 2' },
  { src: 'https://picsum.photos/400/300?random=3', alt: 'Photo 3' },
];

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full">
        <PhotoStack images={images} />
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
