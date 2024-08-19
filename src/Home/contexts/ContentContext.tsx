import React, { createContext, useState, ReactNode } from 'react';
import sections from 'Home/components/sections';

interface Section {
  name: string;
  component: JSX.Element;
  order_index: number;
}

interface ContentContextProps {
  shownSection: string;
  setShownSection: React.Dispatch<React.SetStateAction<string>>;
  sections: Section[];
}

const ContentContext = createContext<ContentContextProps | undefined>(
  undefined
);

export const ContentContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const sortedSections = sections.sort((a, b) => a.order_index - b.order_index);
  const [shownSection, setShownSection] = useState<string>(
    sortedSections[0].name
  );

  return (
    <ContentContext.Provider
      value={{ shownSection, setShownSection, sections: sortedSections }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentContext;
