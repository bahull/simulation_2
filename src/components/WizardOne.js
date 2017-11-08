import React, { Component } from "react";
import { Link } from "react-router-dom";
import { updatePropertyName } from "./../reducer";
import { updatePropertyDescript } from "./../reducer";
import { connect } from "react-redux";
import Nav from "./Nav";
import "./wizardOne.css";

import WizardHead from "./WizardHead";
import WizardTail from "./WizardTail";

class WizardOne extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container-back1">
          <WizardHead path={this.props.match.path.charAt(8)} />
          <h4> Property Name </h4>
          <input
            className="propertyName"
            onChange={e => {
              this.props.updatePropertyName(e.target.value);
            }}
          />
          <h4> Property Description </h4>
          <textarea
            className="propertyDescription"
            onChange={e => {
              this.props.updatePropertyDescript(e.target.value);
            }}
          />
          <WizardTail path={this.props.match.path.charAt(8)} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    propertyName: state.propertyName,
    propertyDescript: state.propertyDescript
  };
};

export default connect(mapStateToProps, {
  updatePropertyName,
  updatePropertyDescript
})(WizardOne);
