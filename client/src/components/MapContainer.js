import React from 'react'
import VenuesMap from './VenuesMap'

class MapContainer extends React.Component {
  render() {

    return (
      <VenuesMap
        venues={this.props.venues}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDbO74TKJ17IJHpBJ9Q9IQu3BOY4LooR5w&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `600px`, width: `600px` }} />}
        mapElement={<div style={{ height: `100%` }} />}        
      />
    );
  }
}

export default MapContainer