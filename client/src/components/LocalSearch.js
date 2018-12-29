import React from 'react';
import axios from 'axios';
<<<<<<< HEAD
// import MapComponent from './MapComponent'
=======
import '../styles/LocalSearch.css'
import MapContainer from './MapContainer'
>>>>>>> ddc1fcef5bf1222f6cd7e018ba3ca4c7bcc21633
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

<<<<<<< HEAD
  GOOGLE_MAPS_KEY

=======
>>>>>>> ddc1fcef5bf1222f6cd7e018ba3ca4c7bcc21633
  render(){
    return(
      <div>
        <Navigation />
        <div className="main-local-search">
<<<<<<< HEAD
        <div>this is where the map should render</div>
=======
        <div className="map-render">this is where the map should render</div>
          <MapContainer venues={this.state.venues} />
>>>>>>> ddc1fcef5bf1222f6cd7e018ba3ca4c7bcc21633
        </div>
        <Footer />
      </div>
    )
  }
}

export default LocalSearch
