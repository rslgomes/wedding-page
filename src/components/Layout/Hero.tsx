import { useEffect, useState } from 'react';
import { PHOTO_LIST } from '../../helpers/constants';

const Hero = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentPhotoIndex(
          (prevIndex) => (prevIndex + 1) % PHOTO_LIST.length
        );
        setVisible(true);
      }, 1800);
    }, 7000);
    return () => clearInterval(interval);
  }, []);
  const currentPhoto = PHOTO_LIST[currentPhotoIndex];
  return (
    <div className="flex items-stretch justify-between bg-primary-100 min-h-screen">
      <div className="w-0 h-screen lg:w-2/3">
        <img
          src={currentPhoto.src}
          alt={currentPhoto.alt}
          className={`w-full h-full object-cover fade-in custom-grayscale  ${
            visible ? 'visible' : ''
          }`}
        />
      </div>
      <div className="w-full lg:w-1/3 flex items-center justify-center relative">
        <div className="w-full px-2 py-8 flex items-center justify-center">
          <img
            src={require('../../assets/img/leaves.png')}
            alt="decorative leaves"
            className="absolute top-0 left-0 opacity-60 aspect-auto"
          />
          <img
            src={require('../../assets/img/leaves.png')}
            alt="decorative leaves"
            className="absolute bottom-0 right-0 rotate-180 opacity-60 aspect-auto"
          />
          <p className="font-secondary text-6xl md:text-8xl lg:text-7xl xl:text-8xl text-secondary-500 text-center">
            Renata e Rodrigo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
