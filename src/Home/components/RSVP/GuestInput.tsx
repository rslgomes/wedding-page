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
      className="font-primary bg-primary-100 rounded border border-primary-300 h-8 p-2 text-primary-950 mb-4 focus:border-primary-500 focus:ring-0 focus:bg-primary-200 focus:bg-opacity-30 placeholder-primary-300 max-w-sm"
      placeholder="Quem é você?"
      type="text"
      value={searchInput}
      onChange={(event) => handleInputChange(event.target.value)}
    ></input>
  );
};

export default GuestInput;
