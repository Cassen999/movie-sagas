import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    card: {
      maxWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  });

class Home extends Component {

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
      };

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_MOVIES'});
    }

    goToDetails = (movie) => {
        this.props.history.push('/details');
        this.props.dispatch({type: "SET_DETAILS", payload: movie});
    }

    goToAddMovie = () => {
        this.props.history.push('/addMovie');
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <>
                <button
                    type="button"
                    onClick={this.goToAddMovie}>
                    Add your own movie
                </button>
                </>
                <h1>List of Movies</h1>
                <p>Click the movie to see more details</p>
                {this.props.reduxState.movies.map((movie, i) => {
                    return(
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justify="center"
                            style={{ minHeight: '100vh' }}
                            >
                            <div key={i} className="card">
                                <Grid item xs={3}>
                                    <Card className={classes.card} 
                                    onClick={() => this.goToDetails(movie)}>
                                        <CardHeader
                                            avatar={
                                                <Avatar aria-label="Movie" className={classes.avatar}>
                                                {movie.title[0]}
                                                </Avatar>
                                            }
                                            action={
                                                <IconButton>
                                                </IconButton>
                                            }
                                            title={movie.title}
                                            />
                                        <CardMedia
                                            className={classes.media}
                                            image={movie.poster}
                                        />
                                        <CardContent>
                                            <Typography component="p">
                                                {movie.title}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </div>
                        </Grid>
                        )
                    })                     
                }
            </div>
        )
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(Home));