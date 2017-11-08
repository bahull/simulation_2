import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import Nav from "./Nav";
import WizardHead from "./WizardHead";
import WizardTail from "./WizardTail";
import { updateDesiredRent } from "./../reducer";
import "./wizardFive.css";

class WizardFive extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container-back1">
          <WizardHead path={this.props.match.path.charAt(8)} />
          <h4 className="reco-rent">Recommended Rent $NaN</h4>
          <h4> Desired Rent </h4>
          <input
            className="rent-bar"
            required
            onChange={e => {
              this.props.updateDesiredRent(e.target.value);
            }}
          />
          <WizardTail
            path={this.props.match.path.charAt(8)}
            desiredRent={this.props.desiredRent}
            propertyName={this.props.propertyName}
            propertyDescript={this.props.propertyDescript}
            address={this.props.address}
            city={this.props.city}
            state={this.props.state}
            zip={this.props.zip}
            imageUrl={this.props.imageUrl}
            loanAmount={this.props.loanAmount}
            monthlyMortgage={this.props.monthlyMortgage}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    desiredRent: state.desiredRent,
    propertyName: state.propertyName,
    propertyDescript: state.propertyDescript,
    address: state.address,
    city: state.city,
    state: state.state,
    zip: state.zip,
    imageUrl: state.imageUrl,
    loanAmount: state.loanAmount,
    monthlyMortgage: state.monthlyMortgage
  };
};

export default connect(mapStateToProps, { updateDesiredRent })(WizardFive);
