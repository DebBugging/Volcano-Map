import React, { Component } from "react";
import Listing from "./Listing";

export default class Volcanoes extends Component {
  render() {
    return (
      <ol className="volcanoes">
        {this.props.venues &&
          this.props.venues.map((venue, index) => <Listing key={index} {...venue} />)}
      </ol>
    );
  }
}