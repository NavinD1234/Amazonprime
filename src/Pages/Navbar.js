import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Your Logo</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/live-tv">Live TV</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li>
          <div className="user-icon">
            <span>User</span>
            <ul className="user-dropdown">
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/logout">Logout</Link></li>
              <li><Link to="/subscriptions">Subscriptions</Link></li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
