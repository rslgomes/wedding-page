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
  return (
    <div className="bg-primary-200 bg-opacity-30 p-2 h-40 rounded overflow-y-scroll text-start">
      {filteredList.map((guest) => {
        return (
          <div
            key={guest.ID}
            onClick={() => handleSelect(guest)}
            className="cursor-pointer p-2 border-b border-b-primary-300"
          >
            {guest.name}
          </div>
        );
      })}
    </div>
  );
};

export default ScrollableInteractiveList;
