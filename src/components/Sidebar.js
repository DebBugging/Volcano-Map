import React, { Component } from "react";
import Volcanoes from "./Volcanoes";

export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      venues: []
    };
  }

  //Hide anything that is not relevant to the search
  filterSearch = () => {
    if (this.state.query.trim() !== "") {
      const volcanoes = this.props.venues.filter(venue =>
        venue.name.toLowerCase().includes(this.state.query.toLowerCase())
      );
      return volcanoes;
    }
    return this.props.venues;
  };

  //Use the search input to select the marker
  handleSearch = e => {
    this.setState({ query: e.target.value });

    const markers = this.props.venues.map(venue => {
      const matching = venue.name
        .toLowerCase()
        .includes(e.target.value.toLowerCase());

      const marker = this.props.markers.find(marker => marker.id === venue.id);
      if (matching) {
        marker.showMarkers = true;
      } else {
        marker.showMarkers = false;
      }
      return marker;
    });
    this.props.updateSuper({ markers });
  };

  render() {
    return (
      <div className="sidebar">
        <input
          type={"search"}
          id={"search"}
          placeholder={"Search Volcano"}
          onChange={this.handleSearch}
        />
        <Volcanoes
          {...this.props}
          venues={this.filterSearch()}
          clickListing={this.props.clickListing}
        />
      </div>
    );
  }
}
