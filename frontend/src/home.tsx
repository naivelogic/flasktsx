import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h2>Welcome to the BSMP Coders Flask Chat Application</h2>
      <p>This application allows you to chat with an AI assistant using Flask on the backend and React on the frontend.</p>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/chat">Chat</Link></li>
        <li><Link to="/echo">Chat Echo Example 1️⃣</Link></li>
        <li><Link to="/echo2">Chat Echo Example 2️⃣</Link></li>
      </ul>
    </div>
  );
};

export default Home;
