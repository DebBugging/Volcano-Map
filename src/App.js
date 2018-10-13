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
 
  /* Use the Foursquare API (static method "search") and set the location to search for volcanoes in Costa Rica */
  componentDidMount() {
    FoursquareAPI.search({
      near: "Costa Rica",
      query: "Volcano",
      limit: 10
    }).then(show => {
      const { venues } = show.response;
      const { center } = show.response.geocode.feature.geometry;
      const markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
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
        <Map {...this.state} />
      </div>
    );
  }
}

export default App;
