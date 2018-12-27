import React from 'react';
import '../styles/MainContent.css'
import axios from 'axios';

class MainContent extends React.Component {
  constructor() {
   super();
   this.state = {
     products: [],
     searchOnline: 'Find product online'
   } 
  }

  async componentDidMount(){
    let { data } = await axios.get("http://cors-anywhere.herokuapp.com/coinmap.org/api/v1/venues/")
    this.setState({
      products: data.venues
    })
    console.log(data);
  }

  handleChange(event) {
    this.setState({ searchLocal: event.target.value });
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
            <h2>Where can I spend bitcoin?</h2>
  
            <div className="spend-menu ui top pointing menu">
              {/* <a className="active item left">Local stores</a> */}
              <a className="item right">Online stores</a>
            </div>
            <div className="spend-search">
  
              {/* <div className="local-search">
  
                <div className="ui transparent icon left labeled input">
                  <div className="ui dropdown label">
                    <div className="text">City</div>
                    <i className="dropdown icon"></i>
                    <div className="menu">
                      <div className="item">City</div>
                      <div className="item">State</div>
                      <div className="item">Country</div>
                    </div>
                  </div>
                  <input type="text" placeholder="Search..." />
                  <i className="search link icon"></i>
                </div>
  
              </div> */}
              
              <div className="online-search">
                <div className="ui transparent icon input">     
                  <input type="text" placeholder="Search..." />
                  <i className="search link icon"></i>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default MainContent;