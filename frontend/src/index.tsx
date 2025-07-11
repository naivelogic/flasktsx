// frontend/src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './home';
import Chat from './chat/Chat';
import ChatEcho from './chat/ChatEcho';

const router = createHashRouter([
  {path: '/',element: <Home />,},
  {path: '/chat',element: <Chat />,},
  {path: '/echo',element: <ChatEcho apiEndpoint="/api/chat-echo/get-message" />,},
  {path: '/echo2',element: <ChatEcho apiEndpoint="/api/chat-echo2/get-message" />,},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
