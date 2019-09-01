import React, { Component } from 'react';
import './App.css';
import { data } from './data.js';

class Post extends Component {
	constructor(props) {
		super(props)
		this.state = {
			toggle: "hide",
			word: "howdy",
			someHi: "yeeeeet",
			robots: data,
		}
	}

	componentDidMount() {
		console.log(this.state.someHi);
		this.setState({someHi: this.props.aprop});
		console.log(this.state.someHi);
	}

	toggleClass = () => {
		if (this.state.toggle === "show") {
			this.setState({ toggle: "hide" });
		}
		else {
			this.setState({ toggle: "show" });
		}
		console.log(this.state.toggle);
		console.log(this.state.someHi);
	}

  render() {
    return (
      <div className={"container " + this.state.toggle}>
        <div>{this.props.aprop}</div>
        <button onClick={this.toggleClass}>CLick me!</button>
        <button onClick={this.props.change}>CHange</button>
        <div>{this.state.robots}</div>
      </div>
    );
  }
}

export default Post;
