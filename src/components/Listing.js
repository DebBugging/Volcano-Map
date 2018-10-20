import React, { Component } from "react";

export default class Listing extends Component {
    render() {
        return (
            <li className="listing">
            {this.props.name}
            </li>
        )
    }
}