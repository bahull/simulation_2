
import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css'; 
import { connect } from 'react-redux';
import { updatePassword, updateUsername } from './../reducer';
import { login, signUp }  from './actions/login'



 class Header extends Component {
    render() {
      return ( <div>
        
   <div className="imgcontainer">
     <div className='innerContain'>
        <img src="data:image/png;base64,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" alt="Avatar" className="avatar"/>
 

  <div className="container">
    <h3 className="left-text"><b>Username</b></h3>
    <input className="uname" onChange={e => this.props.updateUsername(e.target.value)} />

    <h3 className="left-text"><b>Password</b></h3>
    <input className="psw" onChange={e => this.props.updatePassword(e.target.value)} /> 

    <button type="submit" className="login" onClick={() => login(this.props.username, this.props.password)}>Login</button>
    
    <button type="submit" className='signUp' onClick={() => signUp(this.props.username, this.props.password)} >Register</button>
   
   </div>
  </div>
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
