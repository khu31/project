import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/pt1.jpg'; 
import './home.css'; 

function Home() {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <nav>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="content-container">
        <div className="inner-container">
          <h1>Welcome to My Portfolio</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
