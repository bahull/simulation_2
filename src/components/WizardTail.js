import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./wizardTail.css";

import { complete } from "./actions/login";

export default class WizardTail extends Component {
  render() {
    return (
      <div className="tail-container">
        {this.props.path === "1" && (
          <Link to="/wizard/2">
            <button className="next-button1">Next Step</button>
          </Link>
        )}
        {this.props.path === "2" && (
          <div>
            <Link to="/wizard/1">
              <button className="next-button">Previous Step</button>
            </Link>
            <Link to="/wizard/3">
              <button className="next-button">Next Step</button>
            </Link>
          </div>
        )}
        {this.props.path === "3" && (
          <div>
            <Link to="/wizard/2">
              <button className="next-button">Previous Step</button>
            </Link>
            <Link to="/wizard/4">
              <button className="next-button">Next Step</button>
            </Link>
          </div>
        )}
        {this.props.path === "4" && (
          <div>
            <Link to="/wizard/3">
              <button className="next-button">Previous Step</button>
            </Link>
            <Link to="/wizard/5">
              <button className="next-button">Next Step</button>
            </Link>
          </div>
        )}
        {this.props.path === "5" && (
          <div>
            <Link to="/wizard/4">
              <button className="next-button">Previous Step</button>
            </Link>
            <Link to="/Dashboard">
              <button
                className="complete-button"
                onClick={() =>
                  complete(
                    this.props.propertyName,
                    this.props.propertyDescript,
                    this.props.address,
                    this.props.city,
                    this.props.state,
                    this.props.zip,
                    this.props.imageUrl,
                    this.props.loanAmount,
                    this.props.monthlyMortgage,
                    this.props.desiredRent
                  )}
              >
                Complete
              </button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}
