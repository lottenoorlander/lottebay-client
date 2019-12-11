import React, { Component } from "react";

class Advertisements extends Component {
  render() {
    return (
      <div className="mainPageAd">
        <h1>{this.props.title}</h1>
        <img src={this.props.imageUrl} />
        <p>€{this.props.price}</p>
      </div>
    );
  }
}

export default Advertisements;
