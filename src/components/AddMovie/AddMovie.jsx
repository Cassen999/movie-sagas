import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {connect} from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    }
}

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

const genres = [
  'Adventure',
  'Animated',
  'Biographical',
  'Comedy',
  'Disaster',
  'Drama',
  'Epic',
  'Fantasy',
  'Musical',
  'Romantic',
  'Science Fiction',
  'Space-Opera',
  'Superhero'
];

class AddMovie extends Component {

    state = {
        newMovie: {
            title: '',
            poster: '',
            description: '',
            genre: []
        }
    }



    ITEM_HEIGHT = 48;
    ITEM_PADDING_TOP = 8;
    MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    }
};

    goHome = () => {
        this.props.history.push('/');
    }

    handleDropChange = event => {
        this.setState({ genre: event.target.value });
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
                <div className={classes.root}>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="select-multiple">Genres</InputLabel>
                        <Select
                            multiple
                            value={this.state.newMovie.genre}
                            onChange={this.handleDropChange}
                            input={<Input id="select-multiple" />}
                            MenuProps={MenuProps}
                        >
                            {genres.map(genre => (
                                <MenuItem key={genre} value={genre}>
                                    {genre}
                                </MenuItem>
                                ))}
                        </Select>
                    </FormControl>
                </div>
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(AddMovie));