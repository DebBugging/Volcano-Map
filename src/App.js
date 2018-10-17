import React, { Component } from "react";
import "./App.css";
import Map from "./components/Map";
import FoursquareAPI from "./FourSquare";

class App extends Component {
  // Set the state with the info for the map
  constructor() {
    super();
    this.state = {
      venues: [],
      markers: [],
      center: [],
      zoom: 8
    };
  }

  /* Get one marker at a time to show a pop-up when clicked (InfoWindows) */
  handlerMarker = marker => {
    marker.open = true;
    this.setState({ markers: Object.assign(this.state.markers, marker) });

    //This is to prevent from opening more than one at a time.
    if (marker.open === true) {
      marker.open = false;
    }

    //Get info from API
    const venue = this.state.venues.find(venue => venue.id === marker.id);

    FoursquareAPI.venueInfo(marker.id).then(show => {
      const oneVenue = Object.assign(venue, show.response.venue);
      this.setState({ venues: Object.assign(this.state.venues, oneVenue) });
      console.log(oneVenue);
    });
  };

  /* Use the Foursquare API (static method "search") and set the location to search for volcanoes in Costa Rica */
  componentDidMount() {
    FoursquareAPI.search({
      near: "Costa Rica",
      query: "volcan",
      limit: 10
    }).then(show => {
      const { venues } = show.response;
      const { center } = show.response.geocode.feature.geometry;
      const markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
          id: venue.id,
          open: false,
          showMarkers: true
        };
      });

      this.setState({ venues, center, markers });
      console.log(show);
    });
  }

  render() {
    return (
      <div className="App">
        <Map {...this.state} handlerMarker={this.handlerMarker} />
      </div>
    );
  }
}

export default App;
