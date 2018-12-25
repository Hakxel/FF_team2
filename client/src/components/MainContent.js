import React from 'react';
import '../styles/MainContent.css'

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="hero">
        <div>
        <h1>Bitworld Shopper</h1>
        <h2>A global currency, a world of possibilities...</h2>
        </div>
        <div className="where-to-spend">
          <h2>Where can I spend bitcoin?</h2>

          <div className="spend-menu ui top pointing menu">
            <a className="active item left">Local stores</a>
            <a className="item right">Online stores</a>
          </div>
          <div className="spend-search">

            <div className="local-search">

              <div class="ui transparent icon left labeled input">
                <div class="ui dropdown label">
                  <div class="text">City</div>
                  <i class="dropdown icon"></i>
                  <div class="menu">
                    <div class="item">City</div>
                    <div class="item">State</div>
                    <div class="item">Country</div>
                  </div>
                </div>
                <input type="text" placeholder="Search..." />
                  <i class="search link icon"></i>
              </div>

            </div>
            
            <div className="online-search">
              <div class="ui transparent icon input">         
                <input type="text" placeholder="Search..." />
                  <i class="search link icon"></i>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default MainContent;