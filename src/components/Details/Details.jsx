import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

class Details extends Component {

    componentDidMount() {
        // dispatch a get to genres reducer to display genre of clicked movie
        this.props.dispatch({type: 'FETCH_GENRES', payload: this.props.reduxState.details.id })
    }

    backHome = () => {
        // rout to home component
        this.props.history.push('/');
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button 
                    variant="contained" 
                    color="primary" 
                    className={classes.button}
                    type="button"
                    onClick={this.backHome}>
                    Back to Movies
                    </Button>
                <div>
                <h1>Title</h1>
                {/* call the details reducer.title to display title */}
                    <p className="title"> {this.props.reduxState.details.title}</p>
                    {/* use img tag with reducer.poster as the src */}
                    <img className="poster" src={this.props.reduxState.details.poster}
                        alt="Movie Poster"></img>
                </div>
                <div>
                    <h3>Genre(s)</h3>
                    <p>
                        {/* map genres reducer to display genre of clicked movie */}
                        {this.props.reduxState.genres.map((genre, i) => {
                            return(
                                <p key={i}>
                                    {/* use genre.name to display name of genre */}
                                    {genre.name}
                                </p>
                            )
                        })}
                    </p>
                </div>
                <div>
                    <h3>Synopsis</h3>
                    <p className="description-home">
                        {/* use details reducer to display description */}
                        {this.props.reduxState.details.description}
                    </p>
                </div>
            </div>
        )
    }
}

Details.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(Details));