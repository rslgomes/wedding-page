import { useContext, Fragment } from 'react';
import ContentContext from 'Admin/contexts/ContentContext';

const AdminPage: React.FC = () => {
  const content = useContext(ContentContext);
  if (!content) {
    throw new Error('HomePage must be used within a ContentContextProvider');
  }

  const { sections, shownSection } = content;

  return (
    <div>
      {sections.map(
        ({ name, component }) =>
          name === shownSection && <Fragment key={name}>{component}</Fragment>
      )}
    </div>
  );
};

export default AdminPage;