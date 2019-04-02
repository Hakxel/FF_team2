import React from 'react'
import '../styles/MainContent.css'
import TextLoop from 'react-text-loop'


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
        <div className="hero">
          <div className="hero-text">
            <h1>Bitworld Buys</h1>
            <h2>the future of {' '}
              <TextLoop interval={3000}>
                  <span>global</span>
                  <span>local</span>
                  <span>bitcoin</span>
              </TextLoop>
               {' '}shopping. today.
            </h2>
          </div>
          <div className="store-buttons">
            <div className="buttons-wrapper">
              <button className="local ui button large" id="home-buttons" onClick={ this.searchLocalStores }>Shop Local</button>
              <button className="online ui button large" id="home-buttons" onClick={ this.searchOnlineStores }>Shop Online</button>            
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainContent
