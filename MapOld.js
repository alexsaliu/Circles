import React, { Component } from 'react';
import './App.css';
import Post from './Post.js';

class Map extends Component {
  constructor() {
    super()
    this.state = {
      x: 0,
      y: 0,
      coordinates: [],
    }
  }

  position = (event) => {
    const c = this.props.circles;
    const r = this.props.radius;
    const d = this.props.degrees;
    const space = 360 / c;
    let deg = Number(d);
    let coords = [];
    for (let i = 0; i < c; i++) {
      let obj = {};
      obj.x = r * Math.cos(deg * (Math.PI/180));
      obj.y = r * Math.sin(deg * (Math.PI/180));
      deg += space;
      console.log(deg);
      coords.push(obj);
    }
    this.setState({coordinates: coords}, () => {
        console.log(this.state.coordinates);
      })

  }

  render() {
    const { coordinates } = this.state;
    return (
      <div className="box">
        <button onClick={(e) => this.position(e)}>GO</button>
        <div className="circle">
          <div className="center"></div>
          {

            coordinates.map((circle, i) => {
              return (
                <div key={i} style={{transform: `translate(${this.state.coordinates[i].x}px, ${this.state.coordinates[i].y}px)`}} className="node">
                  <div className="node-center"></div>
                </div>
              )
            })

          }
          
        </div>
      </div>
    );
  }
}

export default Map;
