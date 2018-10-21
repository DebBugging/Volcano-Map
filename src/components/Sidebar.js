import React, { Component } from "react";
import Volcanoes from "./Volcanoes";

export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      query: ""
    };
  }

  searchVolcano = () => {};
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
    this.props.updateSuperState({ markers });
  };

  render() {
    return (
      <div className="sidebar">
        <input
          type={"search"}
          id={"search"}
          placeholder={"Search Volcano"}
          handleSearch={this.handleSearch}
        />
        <Volcanoes {...this.props} clickListing={this.props.clickListing} />
      </div>
    );
  }
}
