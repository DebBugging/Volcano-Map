//Click on venues to to show on marker
import React, { Component } from "react";
import Listing from "./Listing";

export default class Volcanoes extends Component {
  render() {
    return (
      <ol className="volcanoes" aria-role="List of items">
        {this.props.venues &&
          this.props.venues.map((venue, index) => (
            <Listing
              key={index}
              {...venue}
              clickListing={this.props.clickListing}
            />
          ))}
      </ol>
    );
  }
}
