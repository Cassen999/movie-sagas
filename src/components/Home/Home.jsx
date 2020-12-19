import React, { Component } from 'react';
import {connect} from 'react-redux';

class Home extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_MOVIES'})
    }

    goToDetails = (movie) => {
        this.props.history.push('/details')
        this.props.dispatch({type: "SET_DETAILS", payload: movie})
    }

    render() {
        return (
            <div>
                <h1>List of Movies</h1>
                <p>Click the poster image to see more details</p>
                {this.props.reduxState.movies.map((movie, i, j, k) => {
                    return(
                        <div>
                            <p key={i} className="title"> {movie.title}</p>
                            <img key={j} className="poster" src={movie.poster}
                             onClick={() => this.goToDetails(movie)} alt="Movie Poster"></img>
                            <p key={k} className="description-home">
                                {movie.description}
                            </p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Home);