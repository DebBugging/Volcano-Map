import React, { Component } from "react";
import Listing from "./Listing";

export default class Volcanoes extends Component {
    render() {
        return (
            <ol className="volcanoes">
            <Listing />
            </ol>
        )
    }
}