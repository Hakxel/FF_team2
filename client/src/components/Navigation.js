import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navigation.css'


const Navigation = () => {
  return(
    <div className="ui big borderless menu inverted blue" id="navigation">
      <img src="logo.png" alt="logo" id="logo" />
      <div className="menu" id="home-about">
      <Link to="/" className="header item">Home</Link>
      <Link to="/about" className="item">About</Link>

      </div>
    </div>
  )
}

export default Navigation
