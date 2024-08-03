import React, { useContext, useState } from 'react';
import ContentContext from '../../contexts/ContentContext';
import logo from '../../assets/img/logoWedding.png';

const NavLike: React.FC = () => {
  const content = useContext(ContentContext);
  const [isHamburguerOpen, setIsHamburguerOpen] = useState(false);
  if (!content) {
    throw new Error('NavLike must be used within a ContentContextProvider');
  }

  const { shownSection, setShownSection, sections } = content;

  const handleClick = (name: string) => {
    setShownSection(name);
    setIsHamburguerOpen(false);
  };

  return (
    <div className="flex w-full justify-between sticky items-center z-10 pl-2 lg:pl-4 bg-primary-100 top-0 shadow-sm">
      <img src={logo} alt="logo" className="h-10 w-auto" />
      <div className="flex items-center lg:hidden">
        <button
          type="button"
          className="size-10"
          onClick={() => setIsHamburguerOpen(!isHamburguerOpen)}
        >
          <svg
            className="w-6 h-6 text-primary-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isHamburguerOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-16 6h16"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`flex-col lg:flex-row flex ${
          isHamburguerOpen ? 'flex absolute top-10 right-0' : 'hidden'
        } bg-primary-100 lg:flex lg:items-center lg:justify-end p-4 pe-8 gap-4`}
      >
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
