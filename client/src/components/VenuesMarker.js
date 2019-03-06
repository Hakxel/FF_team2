import React from "react"
import { Marker, InfoWindow } from "react-google-maps"
import Geocode from 'react-geocode'

const MAPKEY = process.env.REACT_APP_GOOGLE_KEY
console.log(MAPKEY)

export default class VenuesMarker extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false,
      address: ""
    }
  }
  onToggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
    this.getAddress(this.props.location.lat, this.props.location.lng)
  }

  getAddress = (lat, long) => {
    Geocode.setApiKey(MAPKEY);
    Geocode.fromLatLng(lat, long).then(
      response => {
        const addressFromGeo = response.results[0].formatted_address;
        console.log(addressFromGeo);
        this.setState({ address: addressFromGeo})
      },
      error => {
        console.error(error);
      }
    )
  }

  render() {

    return (
      <Marker
        position={this.props.location}
        title={this.props.name}
        onClick={this.onToggleOpen}
      >
      
        {this.state.isOpen && <InfoWindow onCloseClick={this.onToggleOpen}>
          <div>
            <h4>{this.props.name}</h4>
            <address>{this.state.address}</address>
          </div>
        </InfoWindow>}
      </Marker>
    )
  }
}