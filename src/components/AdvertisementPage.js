import React, { Component } from "react";
import { connect } from "react-redux";
import fetchAd from "../store/ad/actions";
import { Link } from "react-router-dom";

class AdvertisementPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(fetchAd(id));
  }

  render() {
    return (
      <div>
        {this.props.add.title ? (
          <div>
            <h1>{this.props.add.title}</h1>
            <img src={this.props.add.pictureUrl} />
            <p>
              {this.props.add.description} <br />
              Price: €{this.props.add.price} <br />
              Contact user: <br />
              <span className="contactDetails">
                email: {this.props.add.email} <br />
                phonenumber: {this.props.add.phonenumber}
              </span>
            </p>
          </div>
        ) : (
          "Loading..."
        )}
        <Link to="/">Back to advertisements</Link>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    add: reduxState.add
  };
}

export default connect(mapStateToProps)(AdvertisementPage);
