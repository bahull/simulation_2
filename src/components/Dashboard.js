import React,  { Component } from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import Nav from './Nav'
export default class Dashboard extends Component {
    render() {
      
  
      return (
            <div>
                <Nav />
            <div className='container-background'>
            <Link to='/wizard/1'>
                <button className='new-property'>Add new property</button>
            </Link>
                <div className='nav-filter'>
                <p id='nav-p-text'>List properties with "desired rent" greater than: $</p>
                    <input id='filter-input' type='text' placeholder='0'/>
                <button id='filter-button'>Filter</button>
                <button id='reset-button'>Reset</button>
                </div>
<hr />

                <content className='listings'>
                    <h2>Home Listings</h2>
                </content>
            </div>

            </div>
      )}
    }