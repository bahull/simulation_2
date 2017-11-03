import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import './button.css';
import { connect } from 'react-redux';

export default class Button extends Component {
    constructor(props) { 
        super(props) 
        this.state = {
            disabled: false
        }
    }

    render() {
        return (
                <button 
                    className={`button button-${this.props.type}`} 
                    disabled={this.state.disabled} 
                    onClick={this.props.action} 
                    style={this.props.style} 
                >
                    {this.props.text}
                </button>
        )
    }
}