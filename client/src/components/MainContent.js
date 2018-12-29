import React from 'react';
import '../styles/MainContent.css'


class MainContent extends React.Component {
  constructor(props){
    super()
  }

  searchLocalStores = (event) => {
    event.preventDefault()
    this.props.homeProps.history.push('/local-search')
  }
  
  searchOnlineStores = (event) => {
    event.preventDefault()
    this.props.homeProps.history.push('/online-search')
    
  }



  render(){
    return (
      <div className="main-content">
        {console.log(this.props)}
        <div className="hero">
          <div>
            <h1>Bitworld Shopper</h1>
            <h2>A global currency, a world of possibilities...</h2>
          </div>
          <div className="where-to-spend">
            <h2>Where can I buy with bitcoin?</h2>
          </div>
          <div className="store-buttons">
            <button className="local ui button" onClick={ this.searchLocalStores }>Local Stores</button>
            <button className="online ui button" onClick={ this.searchOnlineStores }>Online Stores</button>
          </div>
        </div>
      </div>
    )  

  }
}

export default MainContent

