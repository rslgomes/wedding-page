import { FC } from 'react';

interface GuestInputProps {
  searchInput: string;
  handleInputChange: (value: string) => void;
}

const GuestInput: FC<GuestInputProps> = ({
  searchInput,
  handleInputChange,
}) => {
  return (
    <input
      className="border-primary-400 bg-secondary-100 border-2 rounded h-8 p-1 text-primary-950 mb-4 focus:border-primary-700 focus:bg-secondary-200 placeholder-secondary-500 w-full lg:w-max"
      placeholder="Quem é você?"
      type="text"
      value={searchInput}
      onChange={(event) => handleInputChange(event.target.value)}
    ></input>
  );
};

export default GuestInput;
