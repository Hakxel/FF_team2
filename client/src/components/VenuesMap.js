
import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import VenuesMarker from "./VenuesMarker";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";

const VenuesMap = withScriptjs(withGoogleMap((props) => {

  const markers = props.venues.map(venue => <VenuesMarker
    key={venue.id}
    venue={venue}
    location={{ lat: venue.lat, lng: venue.lon }}
    name={venue.name}
  />);

  return (
    <GoogleMap
      defaultZoom={14}
      center={{ lat: 42.3601, lng: -71.0589 }}
    >

      {markers}
        
    </GoogleMap>
  );
}
))

export default VenuesMap;