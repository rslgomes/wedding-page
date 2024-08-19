import { FC, useContext } from 'react';
import ContentContext from '../contexts/ContentContext';
import logo from 'assets/img/logoWedding.png';

const NavLike: FC = () => {
  const content = useContext(ContentContext);
  if (!content) {
    throw new Error('NavLike must be used within a ContentContextProvider');
  }

  const { shownSection, setShownSection, sections } = content;

  const handleClick = (name: string) => {
    setShownSection(name);
  };

  return (
    <div className="flex w-full justify-between sticky items-center z-10 pl-4 bg-primary-100 top-0 shadow-sm">
      <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <img src={logo} alt="logo" className="h-10 w-auto" />
      </div>
      <div
        className={`flex-row top-10 right-0 bg-primary-100 items-center justify-end p-4 pe-8 gap-4`}
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
