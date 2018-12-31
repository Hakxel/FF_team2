import React from 'react';
import axios from 'axios';
import '../styles/LocalSearch.css';
import MapContainer from './MapContainer';
import Navigation from './Navigation';
import Footer from './Footer';
import SearchLocalForm from './SearchLocalForm';
import Geocode from 'react-geocode'

class LocalSearch extends React.Component {
  constructor(){
    super()
    this.state = {
      venues: [],
      locationArr: [],
      searchValue: ''
    }
  }

  async componentDidMount() {
    let { data } = await axios.get("http://cors-anywhere.herokuapp.com/coinmap.org/api/v1/venues/")
    this.setState({
      venues: data.venues
    })
    console.log(this.state.venues)
  }

  getLocationFromName = () => {
    Geocode.setApiKey("AIzaSyDbO74TKJ17IJHpBJ9Q9IQu3BOY4LooR5w");
    let city = this.state.searchValue
    Geocode.fromAddress({city}).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        return ({lat: lat, lng: lng});
      },
      error => {
        console.error("city not found");
      }
    );
  }

  handleLocalSearch = (event) => {
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
          <SearchLocalForm handleLocalSearch={this.handleLocalSearch} localSearchValue={this.state.localSearchValue} handleLocalSearchChange={this.handleLocalSearchChange}/>          
          <div className="map-render">
            <MapContainer venues={this.state.venues} getLocationFromName={this.getLocationFromName}/>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default LocalSearch
