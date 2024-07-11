import React from 'react';
import ReactDOM from 'react-dom/client';
import Usuario from './pages/Usuario';
import Mangas from './pages/Mangas';
import Animes from './pages/Animes';
import Filmes from './pages/Filmes';
import Home from './pages/Home';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/usuario',
    element: <Usuario />,
  },
  {
    path: '/mangas',
    element: <Mangas />,
  },
  {
    path: '/animes',
    element: <Animes />,
  },
  {
    path: '/filmes',
    element: <Filmes />,
  },
  {
    path: '/home',
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
