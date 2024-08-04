// frontend/src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './home';
import Chatv2 from './chat_v2/Chat';
//import App from './App';

const router = createHashRouter([
  {path: '/',element: <Home />,},
  {path: '/chatv2',element: <Chatv2 />,},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
