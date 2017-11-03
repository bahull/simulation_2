import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {updatePropertyName} from './../reducer';
import {updatePropertyDescript} from './../reducer';
import { connect } from 'react-redux';


 class WizardOne extends Component {
    render() {
      console.log(this.props.propertyName, this.props.propertyDescript)
  
      return (<div>
        <div className="wizard">
        <h4> Property Name </h4>
        <input className="propertyName" onChange={ (e) => {this.props.updatePropertyName (e.target.value)}}/> 
        <h4> Property Description </h4>
        <input className="propertyDescription" onChange={ (e) =>{this.props.updatePropertyDescript(e.target.value)}}/> 
        
      </div>
          </div>
      )}
    }
    const mapStateToProps = ( state ) => {
        return {
          propertyName : state.propertyName,
          propertyDescript: state.propertyDescript
        }
      }
      
      export default connect(mapStateToProps, { updatePropertyName, updatePropertyDescript })(WizardOne);