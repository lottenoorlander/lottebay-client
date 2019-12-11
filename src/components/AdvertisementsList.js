import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import fetchAds from "../store/advertisements/actions";
import Advertisement from "./Advertisement";

class AdvertisementsList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAds);
  }

  render() {
    return (
      <div>
        <Link to="/add">add an advertisement</Link>
        {this.props
          ? this.props.adds.map(add => (
              <Link to={`/advertisement/${add.id}`}>
                <Advertisement
                  key={add.id}
                  id={add.id}
                  title={add.title}
                  imageUrl={add.pictureUrl}
                  price={add.price}
                />
              </Link>
            ))
          : "Loading..."}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    adds: reduxState.adds
  };
}

export default connect(mapStateToProps)(AdvertisementsList);
