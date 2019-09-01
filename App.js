import React, { Component } from 'react';
import './App.css';
import Post from './Post.js';
import Map from './Map.js';
import Network from './Network.js'

// <Post aprop={this.state.someText} change={this.stateChange} />

class App extends Component {
  constructor() {
    super()
    this.state = {
      circles: 0,
      radius: 0,
      degrees: 0,
    }
  }

  circles = (event) => {
    this.setState({circles: event.target.value});
    console.log(this.state.circles);
  }

  radius = (event) => {
    this.setState({radius: event.target.value});
    console.log(this.state.radius);
  }

  degrees = (event) => {
    this.setState({degrees: event.target.value});
    console.log(this.state.degrees);
  }

  render() {
    const { circles, radius, degrees} = this.state
    return (
      <div className="App">
        <div className="inputs">
            circles: <input type="text" onChange={this.circles} />
            radius: <input type="text" onChange={this.radius} />
            degrees: <input type="text" onChange={this.degrees} />
        </div>

         <Network members={7} />

      </div>
    );
  }
}

export default App;
