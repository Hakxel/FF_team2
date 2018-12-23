import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return(
    <div className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Navigation