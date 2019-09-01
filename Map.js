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

  componentDidMount() {
    const nodes = this.props.nodes;
    const degrees = this.props.degrees;
    let layerInfo = this.props.layerInfo; // Array of objects (keys: maxNodes, offset, seperation)
    // const growth = this.props.growth; // Pow scaling (should peformed before passing in outerLayers object data)
    let nodeCount = 0;
    let layer = 0;
    let lastMax = 0;
    let lastLayer = layerInfo[layerInfo.length - 1];

    while (nodeCount < nodes) {
      if (layer < layerInfo.length) {       
        nodeCount += layerInfo[layer].maxNodes;
        if (nodeCount >= nodes) {
          layerInfo.slice(0, layer);
        }
      }
      else {
        layerInfo.push(Object.assign({}, lastLayer));
        nodeCount += lastLayer.maxNodes;
      }
      if (nodeCount >= nodes) {
        layerInfo[layerInfo.length - 1].maxNodes = lastLayer.maxNodes - (nodeCount - nodes);
      }
      layer ++;
      console.log(nodeCount);
    }
    console.log(layerInfo);

    let prevSpace = 0;
    let space = 0;
    let nodesInLayer = 0;
    let radius = 0;
    let offset = 0;
    let deg = degrees;
    let coords = [];

    for (let i = 0, layers = layerInfo.length; i < layers; i++) {
      prevSpace = space;
      space = 360 / layerInfo[i].maxNodes;
      offset = layerInfo[i].offset;
      deg = deg + prevSpace * offset;
      nodesInLayer = layerInfo[i].maxNodes;
      radius += layerInfo[i].distance;

      for (let j = 0; j < nodesInLayer; j++) {
        let obj = {};
        obj.x = radius * Math.cos(deg * (Math.PI/180));
        obj.y = radius * Math.sin(deg * (Math.PI/180));
        deg += space;
        coords.push(obj);
      }
      deg -= 360;
    }
    this.setState({coordinates: coords}, () => {
    console.log(this.state.coordinates);
    })
  }

  render() {
    const { coordinates } = this.state;
    return (
      <div className="box">
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
