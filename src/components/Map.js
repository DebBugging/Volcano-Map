/* Taken from https://tomchentw.github.io/react-google-maps/#installation -Step 4 */

import React, { Component } from "react";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 10.0272815, lng: -83.74887179999999 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: 10.0272815, lng: -83.74887179999999 }} />
      )}
    </GoogleMap>
  ))
);

export default class Map extends Component {
  render() {
    return (
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyC0241W7i7-doPIN2UdSTLIGpS7N35T0ws"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
