import React, { createContext, useState, ReactNode } from 'react';
import sections from 'Admin/components/sections';

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
  const [shownSection, setShownSection] = useState<string>(sections[0].name);

  return (
    <ContentContext.Provider
      value={{ shownSection, setShownSection, sections }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentContext;
