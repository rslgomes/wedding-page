import { FC } from 'react';
import { Photo as PhotoInterface } from '../../../helpers/types';

interface PhotoProps {
  photo: PhotoInterface;
}

const Photo: FC<PhotoProps> = ({ photo }) => {
  const rotation = Math.floor(Math.random() * 30) - 15;
  const { src, alt } = photo;

  return (
    <div
      className="relative bg-white shadow-lg p-4"
      style={{ transform: `rotate(${rotation}deg)`, padding: '10px' }}
    >
      <img src={src} alt={alt} className="w-full h-auto" />
    </div>
  );
};

export default Photo;
