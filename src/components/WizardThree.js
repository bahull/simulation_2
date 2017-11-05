import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import Nav from './Nav'
import WizardHead from './WizardHead';
import WizardTail from './WizardTail';

export default class WizardThree extends Component {
    render() {
      
  
      return (<div >
       <Nav />
   <div className='container-back1'>
      <WizardHead path={this.props.match.path.charAt(8)}/>
    <WizardTail path={this.props.match.path.charAt(8)}/>
      </div>
          </div>
      )}
    }