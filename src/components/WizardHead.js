import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './wizardHead.css';
import { connect } from 'react-redux';
import Nav from './Nav'

export default class WizardHead extends Component {
    render() {
        console.log(
            this.props.match)
        return (
            <div>
                <div className='theFlex'>
                <h2 className='addListingHead'>Add new listing</h2>
                <button className='cancelButton'>Cancel</button>
                </div>
                <p className='steps'>Step </p>

            </div>
        );
    }
}
