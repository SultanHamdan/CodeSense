import React from 'react';
import '../../styles/Navbar.css';
import { Link } from 'react-router-dom';

function NavBar({ onToggleSidebar }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={onToggleSidebar}>
        <span className="logo-icon">☰</span>
        <span className="logo-text">CodeSense</span>
      </div>

      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <div className="navbar-actions">
          <button className="sign-in-button">Sign In</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
