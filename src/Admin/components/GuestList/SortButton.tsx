import IconButton from 'Shared/IconButton';
import { Guest } from 'helpers/types';
import { GuestListSort } from './useGuestList';
import { ButtonHTMLAttributes, FC } from 'react';

import { ReactComponent as ArrowDown } from './Icons/ArrowDown.svg';
import { ReactComponent as TwoArrows } from './Icons/TwoArrows.svg';
import { ReactComponent as ArrowUp } from './Icons/ArrowUp.svg';

interface SortButtonprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  guestKey: keyof Guest;
  sorting: GuestListSort;
}

const SortButton: FC<SortButtonprops> = ({ guestKey, sorting, ...props }) => {
  const { key: currentSorting, type: currentSortingType } = sorting;
  const properIcon = (
    key: keyof Guest,
    currentSorting: keyof Guest | undefined,
    currentSortingType: 'ascending' | 'descending' | undefined
  ) => {
    if (currentSorting !== key) return <TwoArrows />;
    if (currentSortingType === 'descending') return <ArrowDown />;
    return <ArrowUp />;
  };
  return (
    <IconButton
      icon={properIcon(guestKey, currentSorting, currentSortingType)}
      {...props}
    />
  );
};

export default SortButton;
