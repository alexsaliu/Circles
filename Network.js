import React, { Component } from 'react';
import './App.css';
import Post from './Post.js';

class Network extends Component {
  constructor() {
    super()
    this.state = {
      coordinates: [],
    }
  }

  componentDidMount() {
    const members = this.props.members;

    let data = [
      { "radius": 120, "degrees": 225 },
      { "radius": 120, "degrees": 315 },
      { "radius": 120, "degrees": 135 },
      { "radius": 100, "degrees": 0 },
      { "radius": 100, "degrees": 180 },
      { "radius": 100, "degrees": 270 },
      { "radius": 100, "degrees": 90 },
    ]

    let positions = [];

      for (let i = 0; i < members; i++) {
        let obj = {};
        obj.x = data[i].radius * Math.cos(data[i].degrees * (Math.PI/180));
        obj.y = data[i].radius * Math.sin(data[i].degrees * (Math.PI/180));
        positions.push(obj);
      }

      this.setState({coordinates: positions});



    // const degrees = this.props.degrees;
    // let layerInfo = this.props.layerInfo; // Array of objects (keys: maxNodes, offset, seperation)
    // // const growth = this.props.growth; // Pow scaling (should peformed before passing in outerLayers object data)
    // let nodeCount = 0;
    // let layer = 0;
    // let lastMax = 0;
    // let lastLayer = layerInfo[layerInfo.length - 1];
    // let g = 0;
    // while (nodeCount < nodes) {
    //   console.log(g + "loop ==============");
    //   g++;
    //   if (layer < layerInfo.length) { 
    //     console.log("LAYER Length: " + layerInfo.length);
    //     console.log("LAYER: " + layer);
    //     console.log("node count: " + nodeCount);      
    //     nodeCount += layerInfo[layer].maxNodes;
    //     console.log("node count: " + nodeCount);
    //     if (nodeCount >= nodes) {
    //       console.log("layerInfo sliced: " + layerInfo);
    //       layerInfo.slice(0, layer);
    //       console.log("layerInfo sliced: " + layerInfo);
    //     }
    //   }
    //   else {
    //     console.log("layer >= layerinfo.length !!!!");
    //     layerInfo.push(Object.assign({}, lastLayer));
    //     nodeCount += lastLayer.maxNodes;
    //   }
    //   if (nodeCount >= nodes) {
    //     layerInfo[layerInfo.length - 1].maxNodes = lastLayer.maxNodes - (nodeCount - nodes);
    //   }
    //   layer ++;
    //   console.log(nodeCount);
    // }
    // console.log(layerInfo);

    // let space = 0;
    // let nodesInLayer = 0;
    // let radius = 0;
    // let offset = 0;
    // let deg = degrees;
    // let coords = [];

    // for (let i = 0, layers = layerInfo.length; i < layers; i++) {
    //   space = 360 / layerInfo[i].maxNodes;
    //   offset = layerInfo[i].offset;
    //   deg = deg + space * offset;
    //   nodesInLayer = layerInfo[i].maxNodes;
    //   radius += layerInfo[i].distance;
    //   for (let j = 0; j < nodesInLayer; j++) {
    //     let obj = {};
    //     obj.x = radius * Math.cos(deg * (Math.PI/180));
    //     obj.y = radius * Math.sin(deg * (Math.PI/180));
    //     deg += space;
    //     coords.push(obj);
    //   }
    //   deg -= 360;
    // }
    // this.setState({coordinates: coords}, () => {
    // console.log(this.state.coordinates);
    // })
  }

  render() {
    const { coordinates } = this.state;
    return (
      <div className="box">
        <div className="circle">
        <div className="center"></div>
          {
            coordinates.map((member, i) => {
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

export default Network;
