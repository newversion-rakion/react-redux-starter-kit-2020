import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>
  <header>
    <div className="container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  </header>

export default Header
