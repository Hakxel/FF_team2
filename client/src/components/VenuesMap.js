
import React from "react"
import { withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps"
import VenuesMarker from "./VenuesMarker"



const VenuesMap = withScriptjs(withGoogleMap((props) => {
  
  const markers = props.venues.map(venue => 
    <VenuesMarker
      key={venue.id}
      venue={venue}
      location={{ lat: venue.lat, lng: venue.lon }}
      name={venue.name}
    />
  )
  
  return (
    <GoogleMap
      defaultZoom={14}
      center={{lat: props.lat, lng: props.lng}}
    >
      {markers}
    </GoogleMap>
  )

}))

export default VenuesMap