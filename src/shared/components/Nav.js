
// Nav.js

import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      { ' | ' }
      <Link to='/about'>About Us</Link>
      { ' | ' }
      <Link to='/detail'>Detail</Link>
      { ' | ' }
      <Link to='/plans'>Plans</Link>
    </nav>
  )
}

export default Nav;