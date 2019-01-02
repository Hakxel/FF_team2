import React from 'react';
import '../styles/MainContent.css';
import TextLoop from 'react-text-loop';


class MainContent extends React.Component {
  constructor(props){
    super()
    this.state= {
      homeProps: this.props.homeProps
    }
  }

  searchLocalStores = (event) => {
    event.preventDefault()
    this.state.homeProps.history.push('/local-search')
  }

  searchOnlineStores = (event) => {
    event.preventDefault()
    this.state.homeProps.history.push('/online-search')

  }



  render(){
    return (
      <div className="main-content">
        {console.log(this.props)}
        <div className="hero">
          <div>
            <h1>bitworld buys</h1>
            <h2>the future of {' '}
              <TextLoop interval={3000}>
                  <span>global</span>
                  <span>local</span>
              </TextLoop>
               {' '}currency. today.
            </h2>
          </div>
          <div className="store-buttons">
            <button className="local ui button huge" id="turkey" onClick={ this.searchLocalStores }>Shop Local</button>
            <button className="online ui button huge" id="turkey" onClick={ this.searchOnlineStores }>Shop Online</button>
          </div>
        </div>
      </div>
    )

  }
}

export default MainContent
