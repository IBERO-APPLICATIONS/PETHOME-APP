import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/MainStore';
import { PethomeApp } from './PethomeApp';
import { RegisterPage } from './app/pages/RegisterPage';

import './styles/styles.scss';
import { LandingPage } from './app/pages/LandingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PethomeApp />,
    errorElement: <div>Not Found</div>
  },
  {
    path: "/login",
    element: <PethomeApp />,
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/main",
    element: <LandingPage />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
