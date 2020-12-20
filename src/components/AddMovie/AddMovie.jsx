import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {connect} from 'react-redux';

const styles = theme => ({
    root: {
      display: 'flex',
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
});

class AddMovie extends Component {

    state = {
        newMovie: {
            title: '',
            poster: '',
            description: '',
            genre: []
        }
    }




    goHome = () => {
        this.props.history.push('/');
    }

    handleDropChange = event => {
        this.setState({ 
            [event.target.name]: event.target.value });
      };


    render() {
        const { classes } = this.props;
        return (
            <div>
                <button
                    type="button"
                    onClick={this.goHome}>
                    Back to Movies
                </button>
                <h1>Hello from AddMovie</h1>
                <form className={classes.root} autoComplete="off">
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="genre-simple">Genres</InputLabel>
                        <Select
                            value={this.state.newMovie.genre}
                            onChange={this.handleDropChange}
                            inputProps={{
                                name: 'genre',
                                id: 'genre-simple',
                              }}
                            >
                            <MenuItem value=''>
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Adventure"}>Adventure</MenuItem>
                            <MenuItem value={"Animated"}>Animated</MenuItem>
                            <MenuItem value={"Biographical"}>Biographical</MenuItem>
                            <MenuItem value={"Comedy"}>Comedy</MenuItem>
                            <MenuItem value={"Disaster"}>Disaster</MenuItem>
                            <MenuItem value={"Drama"}>Drama</MenuItem>
                            <MenuItem value={"Epic"}>Epic</MenuItem>
                            <MenuItem value={"Fantasy"}>Fantasy</MenuItem>
                            <MenuItem value={"Musical"}>Musical</MenuItem>
                            <MenuItem value={"Romantic"}>Romantic</MenuItem>
                            <MenuItem value={"Science Fiction"}>Science Fiction</MenuItem>
                            <MenuItem value={"Space-Opera"}>Space-Opera</MenuItem>
                            <MenuItem value={"Superhero"}>Superhero</MenuItem>
                        </Select>
                    </FormControl>
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