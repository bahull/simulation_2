import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import Nav from './Nav'
import WizardHead from './WizardHead';
import WizardTail from './WizardTail';
import { updateImageUrl } from './../reducer';

import './wizardThree.css';

class WizardThree extends Component {
    render() {
      
  
      return (<div >
       <Nav />
   <div className='container-back1'>
      <WizardHead path={this.props.match.path.charAt(8)}/>
      <div id='image-display'>

          {this.props.imageUrl && <img url={this.props.imageUrl} />}
           {!this.props.imageUrl && <p> Preview</p> }
          </div>
      <h4 className='header-image'> Image URL </h4>
        <input className="imageUrl" onChange={ (e) => {this.props.updateImageUrl (e.target.value)}}/> 
    <WizardTail path={this.props.match.path.charAt(8)}/>
      </div>
          </div>
      )}
    }

    const mapStateToProps = ( state ) => {
        return {
          imageUrl : state.imageUrl,
        }
      }
      
      export default connect(mapStateToProps, { updateImageUrl })(WizardThree);