import { cleanName } from 'helpers/functions';
import React, { useState, useEffect, useRef, ChangeEvent } from 'react';

interface FilterDialogProps {
  hasInput?: boolean;
  filters: string[];
  selectedFilters: any[];
  onChange: (selected: string[]) => void;
  onClose: () => void;
}

const FilterDialog: React.FC<FilterDialogProps> = ({
  hasInput = false,
  filters,
  selectedFilters,
  onChange,
  onClose,
}) => {
  const [filterInput, setFilterInput] = useState('');
  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef?.current) inputRef.current.focus();
  }, [inputRef]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleFilterChange = (filter: string) => {
    const newFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((others) => others !== filter)
      : [...selectedFilters, filter];
    onChange(newFilters);
  };

  const filteredOptions = filters.filter(
    (filter) =>
      cleanName(filter).includes(cleanName(filterInput)) &&
      !selectedFilters.includes(filter)
  );

  return (
    <div
      ref={dialogRef}
      className="absolute mt-2 p-4 bg-white border rounded shadow-lg z-50"
    >
      {hasInput && (
        <input
          type="text"
          ref={inputRef}
          value={filterInput}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setFilterInput(event.target.value)
          }
          className="mb-2 p-2 border-none rounded-sm bg-primary-100 text-primary-700 focus:ring-0"
          placeholder="filtrar bundle..."
        />
      )}
      {selectedFilters.length > 0 && (
        <div className=" py-2 shadow-md">
          {selectedFilters.map((filter) => (
            <label key={filter} className="block">
              <input
                className="form-checkbox h-5 w-5 mr-4 text-primary-700 checked:bg-primary-700 checked:border-primary-700 focus:ring-0"
                type="checkbox"
                checked={selectedFilters.includes(filter)}
                onChange={() => handleFilterChange(filter)}
              />
              {filter}
            </label>
          ))}
        </div>
      )}
      <div className="max-h-40 overflow-y-auto space-y-1">
        {filteredOptions.map((filter) => (
          <label key={filter} className="block">
            <input
              className="form-checkbox h-5 w-5 mr-4 text-primary-700 checked:bg-primary-700 checked:border-primary-700 focus:ring-0"
              type="checkbox"
              checked={selectedFilters.includes(filter)}
              onChange={() => handleFilterChange(filter)}
            />
            {filter}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterDialog;
