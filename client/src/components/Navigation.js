import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'


const Navigation = () => {
  return(
    <div className="ui borderless menu inverted blue" id="navigation">
      <div className="right fluid item menu">
      <Link to="/" className="header item">Home</Link>
      <Link to="/about" className="item">About</Link>

      </div>
    </div>
  )
}

export default Navigation