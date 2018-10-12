import React, { Component } from "react";
import "./App.css";
import Map from "./components/Map";
import FoursquareAPI from "./FourSquare";

class App extends Component {
  componentDidMount() {
    FoursquareAPI.search({
      near: "Costa Rica",
      query: "volcan",
      limit: 10
    }).then(show => {
      console.log(show);
    });
  }

  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default App;
