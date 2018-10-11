import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import FoursquareAPI from './APIs/FourSqaure';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default App;
