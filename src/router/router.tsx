import { createBrowserRouter } from 'react-router-dom';
import { Auth } from '../views/pages/Auth';
import { Login } from '../views/components/AuthPages/Login';
import { Register } from '../views/components/AuthPages/Register';
import { Home } from '../views/pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
    children: [
      { path: '/', element: <Login /> },
      { path: '/register', element: <Register /> },
    ],
  },
  {
    path: '/home',
    element: <Home />,
  },
]);
