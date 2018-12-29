import React from 'react';
import axios from 'axios';
import '../styles/LocalSearch.css'
import MapContainer from './MapContainer'
import Navigation from './Navigation'
import Footer from './Footer'

class LocalSearch extends React.Component {
  constructor(){
    super()
    this.state = {
      venues: [],
      locationArr: []
    }
  }

  async componentDidMount() {
    let { data } = await axios.get("http://cors-anywhere.herokuapp.com/coinmap.org/api/v1/venues/")
    this.setState({
      venues: data.venues
    })
    console.log(this.state.venues)
  }

  render(){
    return(
      <div>
        <Navigation />
        <div className="main-local-search">
        <div>this is where the map should render</div>
          <MapContainer />
        </div>
        <Footer />
      </div>
    )
  }
}

export default LocalSearch