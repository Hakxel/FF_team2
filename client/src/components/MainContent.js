import React from 'react';
import '../styles/MainContent.css'
import {browserHistory} from 'react-dom'


class MainContent extends React.Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div className="main-content">
        <div className="hero">
          <div>
            <h1>Bitworld Shopper</h1>
            <h2>A global currency, a world of possibilities...</h2>
          </div>
          <div className="where-to-spend">
            <h2>Where can I buy with bitcoin?</h2>
          </div>
          <div className="store-buttons">
            <button class="local ui button" >Local Stores</button>
            <button class="online ui button" >Online Stores</button>
          </div>
        </div>
      </div>
    )  

  }
}

export default MainContent

