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
import Button from '@material-ui/core/Button';

const styles = theme => ({
    card: {
      width: 200,
      marginLeft: 30,
      marginRight: 30,
      marginBottom: 10,
      justifyContent: 'space-evenly'
    },
    media: {
      height: 150,
      width: 200,
      justifyContent: 'space-evenly',
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
  });

class Home extends Component {

    handleExpandClick = () => {
        // material ui
        this.setState(state => ({ expanded: !state.expanded }));
      };

    componentDidMount() {
        // to have movies on reload
        this.props.dispatch({type: 'FETCH_MOVIES'});
    }

    goToDetails = (movie) => {
        // route to details component
        this.props.history.push('/details');
        // send data to details to display clicked movie
        this.props.dispatch({type: "SET_DETAILS", payload: movie});
    }

    goToAddMovie = () => {
        // route to addMovie component
        this.props.history.push('/addMovie');
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="cardDiv">
                <>
                <Button 
                    variant="contained" 
                    color="primary" 
                    className={classes.button}
                    onClick={this.goToAddMovie}>
                    Add your own Movie
                </Button>
                </>
                <h1>List of Movies</h1>
                <p>Click the movie to see more details</p>
                {/* map the movies reducer to render each movie */}
                {this.props.reduxState.movies.map((movie, i) => {
                    return(
                        <div key={i} className="card">
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
                        </div>)
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