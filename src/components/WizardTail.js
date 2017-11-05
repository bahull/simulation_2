import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './wizardTail.css';

class WizardTail extends Component {
    render() {
        console.log(this.props.path + 1);
        return (
            <div className='tail-container'>
                {this.props.path === "1" && 
                <Link to="/wizard/2"> 
                    <button className = "next-button" >Next Step</button>
                    </Link>
                 }
            </div>
        );
    }
}

export default WizardTail;