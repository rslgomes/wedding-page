'use client';

import React, { useContext } from 'react';
import ContentContext from '../../contexts/ContentContext';

const NavLike: React.FC = () => {
  const content = useContext(ContentContext);
  if (!content) {
    throw new Error('NavLike must be used within a ContentContextProvider');
  }

  const { shownSection, setShownSection, sections } = content;

  const handleClick = (name: string) => {
    setShownSection(name);
  };

  return (
    <div className="flex-none bg-primary-200">
      <div className="flex justify-start p-4 gap-4">
        {sections.map(({ name }) => (
          <button
            key={name}
            type="button"
            onClick={() => handleClick(name)}
            className={`text-primary-700 font-primary ${
              shownSection === name ? 'font-bold' : ''
            }`}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavLike;
