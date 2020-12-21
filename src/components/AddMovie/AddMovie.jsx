import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
      display: 'inline-grid',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
      maxWidth: 300,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
        display: 'grid'
      },
      button: {
        margin: theme.spacing.unit,
      }
});

class AddMovie extends Component {

    componentDidMount() {
        // dispatch on mount to be able to have genres to use in state
        this.props.dispatch({type: 'FETCH_ALL_GENRES'})
    }

    // Local state to send the user input movie to database
    state = {
        newMovie: {
            title: '',
            poster: '',
            description: '',
            genre_id: ''
        }
    }

    goHome = () => {
        // route to home component
        this.props.history.push('/');
    }

    // Make a handleChange that takes in an inputProperty so that
    // the this function can be used for all inputs and dropdown
    handleChange = (event, inputProperty) => {
        this.setState({
            newMovie:{
                ...this.state.newMovie,
                [inputProperty]: event.target.value, 
            }
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log('In handleClick');
        // dispatch to add the movie to database
        this.props.dispatch({type: 'ADD_MOVIE', payload: this.state.newMovie})
        // route to home component
        this.props.history.push('/')
    }


    render() {
        console.log(this.state)
        const { classes } = this.props;
        return (
            <div>
                <Button 
                    variant="contained" 
                    color="primary" 
                    className={classes.button}
                    onClick={this.goHome}>
                    Back to Movies
                </Button>
                <h1>Add a Movie</h1>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={this.handleClick}>
                    <TextField
                        id="standard"
                        label="Title"
                        value={this.state.newMovie.title}
                        // pass in event and input property for handleChange
                        onChange={(event) => this.handleChange(event, 'title')}
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        id="standard"
                        label="Poster URL"
                        value={this.state.newMovie.poster}
                        // pass in event and input property for handleChange
                        onChange={(event) => this.handleChange(event, 'poster')}
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        // multiline used so user can see what they are typing
                        id="standard-multiline-flexible"
                        label="Description"
                        multiline
                        rowsMax="10"
                        value={this.state.newMovie.description}
                        // pass in event and input property for handleChange
                        onChange={(event) => this.handleChange(event, 'description')}
                        className={classes.textField}
                        margin="normal"
                    />
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="genre-simple">Genre</InputLabel>
                        <Select
                            value={this.state.newMovie.genre_id}
                            // pass in event and input property for handleChange
                            onChange={(event) => this.handleChange(event, 'genre_id')}
                            >
                                {/* map genres to populate the dropdown */}
                            {this.props.reduxState.genres.map((genre) => {
                                return(
                                    <MenuItem key={genre.id} value={genre.id}>{genre.name}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        className={classes.button}
                        onClick={this.goHome}>
                        Cancel
                    </Button>
                    <Button 
                        type="submit"
                        variant="contained" 
                        color="primary" 
                        className={classes.button}>
                        Add Movie
                    </Button>
                </form>
            </div>
        )
    }
}

AddMovie.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(AddMovie));