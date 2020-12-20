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
        this.props.dispatch({type: 'FETCH_ALL_GENRES'})
    }

    state = {
        newMovie: {
            title: '',
            poster: '',
            description: '',
            genre_id: ''
        }
    }

    goHome = () => {
        this.props.history.push('/');
    }

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
        this.props.dispatch({type: 'ADD_MOVIE', payload: this.state.newMovie})
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
                <h1>Hello from AddMovie</h1>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={this.handleClick}>
                    <TextField
                        id="standard"
                        label="Title"
                        value={this.state.newMovie.title}
                        onChange={(event) => this.handleChange(event, 'title')}
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        id="standard"
                        label="Poster URL"
                        value={this.state.newMovie.poster}
                        onChange={(event) => this.handleChange(event, 'poster')}
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        id="standard-multiline-flexible"
                        label="Description"
                        multiline
                        rowsMax="10"
                        value={this.state.newMovie.description}
                        onChange={(event) => this.handleChange(event, 'description')}
                        className={classes.textField}
                        margin="normal"
                    />
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="genre-simple">Genre</InputLabel>
                        <Select
                            value={this.state.newMovie.genre_id}
                            onChange={(event) => this.handleChange(event, 'genre_id')}
                            >
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