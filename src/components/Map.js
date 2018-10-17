/* Taken from https://tomchentw.github.io/react-google-maps/#installation -Step 4 */

import React, { Component } from "react";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

/* Set the defualt position to Turrialba, Costa Rica. Use parseFloat on center so it reads as a number- (https://github.com/tomchentw/react-google-maps/issues/367) */

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      zoom={props.zoom}
      defaultCenter={{ lat: 10.0272815, lng: -83.74887179999999 }}
      center={{
        lat: parseFloat(props.center.lat),
        lng: parseFloat(props.center.lng)
      }}
    >
      {props.markers &&
        props.markers
          .filter(marker => marker.showMarkers)
          .map((marker, index) => (
            <Marker
              key={index}
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => props.handlerMarker(marker)}>
              {marker.open && (<InfoWindow>
                <p>Hi</p>
              </InfoWindow>)}
</Marker>
          ))}
    </GoogleMap>
  ))
);

export default class Map extends Component {
  render() {
    return (
      <MyMapComponent
        {...this.props}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyC0241W7i7-doPIN2UdSTLIGpS7N35T0ws"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `600px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
