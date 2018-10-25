import React, { Component } from "react";
import Map from "./components/Map";
import FoursquareAPI from "./FourSquare";
import Sidebar from "./components/Sidebar";

class App extends Component {
  // Set the state with the info for the map
  constructor() {
    super();
    this.state = {
      venues: [],
      markers: [],
      center: [],
      zoom: 8,
      updateSuper: change => {
        this.setState(change);
      }
    };
  }

  /* Get one marker at a time to show a pop-up when clicked (InfoWindows) */
  clickMarker = marker => {
    this.closeMarkers();
    marker.open = true;
    this.setState({ markers: Object.assign(this.state.markers, marker) });

    //Get info from API
    const venue = this.state.venues.find(venue => venue.id === marker.id);

    FoursquareAPI.venueInfo(marker.id).then(show => {
      const oneVenue = Object.assign(venue, show.response.venue);
      this.setState({ venues: Object.assign(this.state.venues, oneVenue) });
      console.log(marker);
    });
  };

  //Open one marker at a time
  closeMarkers = () => {
    const close = this.state.markers.map(marker => {
      marker.open = false;
      return marker;
    });
    this.setState({ markers: Object.assign(this.state.markers, close) });
  };

  //Show info when clicked from sidebar
  clickListing = venue => {
    //Get info from marker
    const marker = this.state.markers.find(marker => marker.id === venue.id);
    this.clickMarker(marker);
    console.log(venue);
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
        <Sidebar {...this.state} clickListing={this.clickListing} />
        <Map {...this.state} clickMarker={this.clickMarker} />
      </div>
    );
  }
}

export default App;
