import React, { Component } from 'react';
import {connect} from 'react-redux';

class Details extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_GENRES'})
    }

    render() {
        const { details, genres } = this.props;
        return (
            <div>
                <h1>Hello from Details</h1>
                {JSON.stringify(details)}
                {JSON.stringify(genres)}
                
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    details: reduxState.details,
    genres: reduxState.genres
});

export default connect(mapReduxStateToProps)(Details);