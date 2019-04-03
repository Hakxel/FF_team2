import React from 'react'
import axios from 'axios'
import '../styles/LocalSearch.css'
import Navigation from './Navigation'
import Footer from './Footer'
import Geocode from 'react-geocode'
import VenuesMap from './VenuesMap'

const MAPKEY = process.env.REACT_APP_GOOGLE_KEY

class LocalSearch extends React.Component {
  constructor(){
    super()
    this.state = {
      venues: [],
      searchValue: "",
      cityLat: 42.3601,
      cityLong: -71.0589
    }
  }
  
  async componentDidMount() {
    let { data } = await axios.get("/localsearch")
    this.setState({
      venues: data
    })
  }

   getLocationFromName =  () => {
     Geocode.setApiKey(MAPKEY);
    let city = this.state.searchValue
    console.log(`city:`+city)
    Geocode.fromAddress(city).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({
          cityLat: lat,
          cityLong: lng
        })
        console.log(`lat:`+this.state.cityLat)
        console.log(`long` +this.state.cityLong)
      },
      error => {
        console.error("city not found");
      }
    )
  }

  handleLocalSubmit = (event) => {
    event.preventDefault();
    
    this.getLocationFromName()
  }

  handleLocalSearchChange = (event) => {
    event.preventDefault();
    this.setState({
      searchValue: event.target.value
    })
  }


  render(){
    return(
      <div>
        <Navigation />

        <div className="main-local-search">
        <h1>Find Local Retailers</h1>
          <form className="ui input" onSubmit={this.handleLocalSubmit}>
            <input type="text" placeholder="Enter a city name..." name="local_search" value={this.state.searchValue} onChange={this.handleLocalSearchChange}  />
            <button className="ui blue button">Search</button>
          </form>
          <div className="map-render">
            <VenuesMap
              venues={this.state.venues}
              lat={this.state.cityLat}
              lng={this.state.cityLong}
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${MAPKEY}&v=3.exp&libraries=geometry,drawing,places`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div className="map-container" style={{ height: `70vh`, width: `80vw` }} />}
              mapElement={<div style={{ height: `100%` }} />} />
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default LocalSearch
