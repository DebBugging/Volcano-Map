import React, { Component } from "react";

export default class Listing extends Component {
  render() {
    return (
      <li aria-role="Listed Item"
        className="listing"
        onClick={() => this.props.clickListing(this.props)}
      >
        {this.props.name}

        <img aria-role="Icon"
          src={`${this.props.categories[0].icon.prefix}30${
            this.props.categories[0].icon.suffix
          }`}
          alt={`${this.props.categories[0].name
          } Icon`}
        />
      </li>
    );
  }
}
