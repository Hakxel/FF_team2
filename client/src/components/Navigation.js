import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return(
    <div className="ui menu inverted blue">
      <Link to="/" className="header item">Home</Link>
      <Link to="/about" className="item">About</Link>
    </div>
  )
}

export default Navigation