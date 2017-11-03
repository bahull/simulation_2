import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css'; 
import { connect } from 'react-redux';

import { updatePassword, updateUsername } from './../reducer';
import { login }  from './actions/login'

        
   <div className="imgcontainer">



    <button type="submit">Login</button>
    <button type="submit" onClick={login}>Register</button>
    
  </div>

 


          </div>
   ) }}
const mapStateToProps = ( state ) => {
  return {
    username : state.username,
    password: state.password
  }
}

export default connect(mapStateToProps, { updatePassword, updateUsername })(Header);