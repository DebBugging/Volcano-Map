import React, { Component } from "react";
import Volcanoes from "./Volcanoes";

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
            <input type={"search"} id={"search"} placeholder={"Favorite volcano"} />
            <Volcanoes />
            </div>
        )
    }
}