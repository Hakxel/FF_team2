import React from 'react';
import '../styles/LocalSearch.css'
import axios from 'axios';
// import MapComponent from './MapComponent'
import Navigation from './Navigation'
import Footer from './Footer'
import '../styles/LocalSearch.css'

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

  GOOGLE_MAPS_KEY

  render(){
    return(
      <div>
        <Navigation />
        <div className="main-local-search">
        <div>this is where the map should render</div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default LocalSearch
