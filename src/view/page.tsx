'use client';

import React, { useContext } from 'react';
import ContentContext from '../contexts/ContentContext';

const HomePage: React.FC = () => {
  const content = useContext(ContentContext);
  if (!content) {
    throw new Error('HomePage must be used within a ContentContextProvider');
  }

  const { sections, shownSection } = content;

  return (
    <div>
      {sections.map(
        ({ name, component }) =>
          name === shownSection && (
            <React.Fragment key={name}>{component}</React.Fragment>
          )
      )}
    </div>
  );
};

export default HomePage;
