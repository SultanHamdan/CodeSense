import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Sidebar.css';

function Sidebar({ isOpen, onClose }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>X</button>
      <div className="sidebar-content">
        <ul>
          <li>
            <Link to="/profile" onClick={onClose}>
              <button className="sidebar-btn">Get Started</button>
            </Link>
          </li>
          <li>
            <Link to="/codeexplainer" onClick={onClose}>
              <button className="sidebar-btn">CodeExplainer</button>
            </Link>
          </li>
          <li>
            <Link to="/profile" onClick={onClose}>
              <button className="sidebar-btn">TextExplainer</button>
            </Link>
          </li>
          <li>
            <Link to="/settings" onClick={onClose}>
              <button className="sidebar-btn">Settings</button>
            </Link>
          </li>
          <li>
            <Link to="/help" onClick={onClose}>
              <button className="sidebar-btn">Help</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
