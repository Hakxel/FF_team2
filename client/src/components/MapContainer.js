import React from 'react'
import VenuesMap from './VenuesMap'

class MapContainer extends React.Component {
  constructor(){
    super()
    this.state= {
      lat: 42.3601,
      lng: -71.0589
    }
  }

  componentDidMount(){
    this.setState({
      lat: this.props.searchLat,
      lng: this.props.searchLong
    })
  }
  render() {

    return (
      <VenuesMap
        venues={this.props.venues}
        lat={this.state.lat}
        lng={this.state.lng}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDbO74TKJ17IJHpBJ9Q9IQu3BOY4LooR5w&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `80%` }} />}
        containerElement={<div style={{ height: `70vh`, width: `80vw` }} />}
        mapElement={<div style={{ height: `80%` }} />}        
      />
    );
  }
}

export default MapContainer
