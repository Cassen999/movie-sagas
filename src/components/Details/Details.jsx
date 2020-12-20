import React, { Component } from 'react';
import {connect} from 'react-redux';

class Details extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_GENRES', payload: this.props.reduxState.details.id })
    }

    backHome = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <button 
                    type="button"
                    onClick={this.backHome}>
                    Back to Movies
                    </button>
                <div>
                <h1>Title</h1>
                    <p className="title"> {this.props.reduxState.details.title}</p>
                    <img className="poster" src={this.props.reduxState.details.poster}
                        alt="Movie Poster"></img>
                </div>
                <div>
                    <h3>Genre(s)</h3>
                    <p>
                        {this.props.reduxState.genres.map((genre, i) => {
                            return(
                                <p key={i}>
                                    {genre.name}
                                </p>
                            )
                        })}
                    </p>
                </div>
                <div>
                    <h3>Synopsis</h3>
                    <p className="description-home">
                        {this.props.reduxState.details.description}
                    </p>
                </div>
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Details);