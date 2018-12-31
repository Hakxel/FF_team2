import React from "react";
import { Marker, InfoWindow } from "react-google-maps";

export default class VenuesMarker extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false
    }
  }
  onToggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {

    return (
      <Marker
        position={this.props.location}
        title={this.props.name}
        onClick={this.onToggleOpen}
      >
      
        {this.state.isOpen && <InfoWindow onCloseClick={this.onToggleOpen}>
          <div><h4>{this.props.name}</h4></div>
        </InfoWindow>}
      </Marker>
    );
  }
}