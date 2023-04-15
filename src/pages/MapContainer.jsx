import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 47.4916, lng: 19.0577 }} // Replace with your desired initial center
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "YOUR_API_KEY_HERE", // Replace with your Google Maps API key
})(MapContainer);
