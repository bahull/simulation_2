import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import Nav from './Nav'
import WizardHead from './WizardHead';

export default class WizardTwo extends Component {
    render() {
      
  
      return (<div >
        <Nav />
    <div className='container-back1'>
       <WizardHead path={this.props.match.path.charAt(8)}/>
    
       </div>
           </div>
      )}
    }