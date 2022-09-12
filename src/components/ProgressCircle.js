import React, { Component } from 'react';

class ProgressCircle extends Component {
    render() { 
        return (
            <>
                <span>{ this.props.title }</span>
                <svg>
                    <circle cx="50px" cy="50px" r="50px"></circle>
                    <circle cx="50px" cy="50px" r="50px" strokeDashoffset={ this.props.level }></circle>
                </svg>
            </>
        );
    }
}
 
export default ProgressCircle;