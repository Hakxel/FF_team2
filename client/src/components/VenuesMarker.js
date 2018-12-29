import React from "react";
import { Marker } from "react-google-maps";

export default class VenuesMarker extends React.Component {

  render() {
    return (
      <Marker
        position={this.props.location}
      >
      </Marker>
    );
  }
}