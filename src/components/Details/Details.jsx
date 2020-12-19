import React, { Component } from 'react';
import {connect} from 'react-redux';

class Details extends Component {
    render() {
        return (
            <div>
                <h1>Hello from Details</h1>
                {JSON.stringify(this.props.reduxState.details)}
                
                
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Details);