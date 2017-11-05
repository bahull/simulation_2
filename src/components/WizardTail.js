import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './wizardTail.css';

class WizardTail extends Component {
    render() {
        console.log("hello");
        return (
            <div className='tail-container'>
                {this.props.path === "1" && 
                    <button className = "next-button" >Next Step</button>
                 }
            </div>
        );
    }
}

export default WizardTail;