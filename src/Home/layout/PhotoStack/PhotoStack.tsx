import { FC, useEffect, useRef, useState } from 'react';
import Photo from './Photo';
import { Photo as PhotoInterface } from '../../../helpers/types';

interface PhotoStackProps {
  images: PhotoInterface[];
}

const PhotoStack: FC<PhotoStackProps> = ({ images }) => {
  const [shownImages, setShownImages] = useState<PhotoInterface[]>([images[0]]);
  const rotations = useRef<number[]>([]);

  useEffect(() => {
    if (rotations.current.length === 0) {
      rotations.current = images.map(() => Math.floor(Math.random() * 30) - 15);
    }

    const interval = setInterval(() => {
      setShownImages((prevImages) => {
        if (prevImages.length < images.length) {
          return [...prevImages, images[prevImages.length]];
        }
        return prevImages;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative grid grid-cols-1 grid-rows-1 w-64 h-64 mx-auto">
      {shownImages.map((image, index) => (
        <div
          key={index}
          className="col-start-1 row-start-1 animate-slide-in"
          style={{ animationDelay: `${index * 0.5}s` }}
        >
          <Photo photo={image} roatation={rotations.current[index]} />
        </div>
      ))}
    </div>
  );
};

export default PhotoStack;
