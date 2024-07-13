import { FC } from 'react';
import Photo from './Photo';
import { Photo as PhotoInterface } from '../../../helpers/types';

interface PhotoStackProps {
  images: PhotoInterface[];
}

const PhotoStack: FC<PhotoStackProps> = ({ images }) => {
  return (
    <div className="relative grid grid-cols-1 grid-rows-1">
      {images.map((image, index) => (
        <div
          key={index}
          className="col-start-1 row-start-1"
          style={{ zIndex: index }}
        >
          <Photo photo={image} />
        </div>
      ))}
    </div>
  );
};

export default PhotoStack;
