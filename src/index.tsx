import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContentContextProvider as HomeContextProvider } from './Home/contexts/ContentContext';
import { ContentContextProvider as AdminContextProvider } from 'Admin/contexts/ContentContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HomeContextProvider>
      <AdminContextProvider>
        <App />
      </AdminContextProvider>
    </HomeContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
