import { FC } from 'react';
import { Guest } from '../../helpers/types';

interface ScrollableInteractiveListProps {
  filteredList: Guest[];
  handleSelect: (guest: Guest) => void;
}

const ScrollableInteractiveList: FC<ScrollableInteractiveListProps> = ({
  filteredList,
  handleSelect,
}) => {
  const firstFive = filteredList.slice(0, 5);
  return (
    <div className="font-primary bg-primary-200 bg-opacity-30 p-2 h-min-content min-h-12 text-start">
      {firstFive.map((guest, idx, array) => {
        const isLast = idx === array.length - 1;
        return (
          <div
            key={guest._id}
            onClick={() => handleSelect(guest)}
            className={`cursor-pointer p-2 ${
              isLast ? '' : 'border-b border-b-primary-300'
            } `}
          >
            {guest.name}
          </div>
        );
      })}
    </div>
  );
};

export default ScrollableInteractiveList;
