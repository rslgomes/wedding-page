import { FC } from 'react';
import { Photo as PhotoInterface } from '../../../helpers/types';

interface PhotoProps {
  photo: PhotoInterface;
  roatation: number;
}

const Photo: FC<PhotoProps> = ({ photo, roatation }) => {
  const { src, alt } = photo;

  return (
    <div
      className="relative bg-white shadow-lg p-4 w-64 h-64"
      style={{ transform: `rotate(${roatation}deg)` }}
    >
      <img src={src} alt={alt} className="max-w-full max-h-full m-auto" />
    </div>
  );
};

export default Photo;
