import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import HomeLayout from 'Home/view/layout';
import HomePage from 'Home/view/page';
import AdminLayout from 'Admin/view/layout';
import AdminPage from 'Admin/view/page';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomeLayout>
              <HomePage />
            </HomeLayout>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <AdminPage />
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
