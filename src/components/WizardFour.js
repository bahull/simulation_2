import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import Nav from "./Nav";
import WizardHead from "./WizardHead";
import WizardTail from "./WizardTail";
import { updateLoanAmount, updateMonthlyMortgage } from "./../reducer";
import "./wizardFour.css";

class WizardFour extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container-back1">
          <WizardHead path={this.props.match.path.charAt(8)} />
          <h4 className="header-loan"> Loan Amount </h4>
          <input
            className="bars"
            onChange={e => {
              this.props.updateLoanAmount(e.target.value);
            }}
          />
          <h4 className="header-mortgage"> Monthly Mortgage </h4>
          <input
            className="bars"
            onChange={e => {
              this.props.updateMonthlyMortgage(e.target.value);
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
    loanAmount: state.loanAmount,
    monthlyMortgage: state.monthlyMortgage
  };
};

export default connect(mapStateToProps, {
  updateLoanAmount,
  updateMonthlyMortgage
})(WizardFour);
