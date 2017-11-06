import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import './wizardTwo.css';

import { updateAddress, updateCity , updateState, updateZip } from './../reducer';

import { connect } from 'react-redux';
import Nav from './Nav'
import WizardHead from './WizardHead';
import WizardTail from './WizardTail';

class WizardTwo extends Component {
    render() {
  
      return (<div>
        <Nav />
    <div className='container-back1'>
       <WizardHead path={this.props.match.path.charAt(8)}/>
       <h4 className='headers1'> Address </h4>
        <input id="address" onChange={ (e) => {this.props.updateAddress (e.target.value)}}/> 
        <div className='flexed-text'>
        <h4 className='headers1'> City </h4>
        <input className="cityState" onChange={ (e) => {this.props.updateCity (e.target.value)}}/> 
        <h4 className='headers1'> State </h4>
        <input className="cityState" onChange={ (e) => {this.props.updateState (e.target.value)}}/> 
       </div>
        <h4 className='headers1'> Zip </h4>
        <input className="zip" onChange={ (e) => {this.props.updateZip (e.target.value)}}/> 
       <WizardTail path={this.props.match.path.charAt(8)} />
       </div>
           </div>
      )}
    }

    const mapStateToProps = ( state ) => {
        return {
            address : state.address,
          city : state.city,
          state : state.state,
          zip : state.zip
        }
      }
      
      export default connect(mapStateToProps, { updateAddress, updateCity , updateState, updateZip})(WizardTwo);