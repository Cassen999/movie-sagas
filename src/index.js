import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import Axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// This generator is used to get all the movies for the Home component
function* fetchMovies() {
    console.log('In fetchMovies')
    try {
        const response = yield Axios.get('/api/movie')
        yield put({type: 'SET_MOVIES', payload: response.data})
        console.log(response.data);
    }
    catch(error) {
        console.log('Error in fetchMovies index.js ', error)
    }
}

// This generator is used to pass in a specific id of the movie
// that was clicked in the home component in order to get the 
// genres of that specific movie
function* fetchGenres(action) {
    console.log('In fetchGenres')
    try{
        const response = yield Axios.get('/api/genre/' + action.payload)
        yield put({type: 'SET_GENRES', payload: response.data})
        console.log(response.data, action.payload)
    }
    catch(error) {
        console.log('Error in fetchGenres index.js ', error)
    }
}

// This generator is used to get all genres in database
function* fetchAllGenres(action) {
    console.log('In fetchAllGenres')
    try{
        const response = yield Axios.get('/api/genre')
        yield put({type: 'SET_GENRES', payload: response.data})
        console.log(response.data)
    }
    catch(error) {
        console.log('Error in fetchAllGenres index.js ', error)
    }
}

function* addMovie(action) {
    try {    
        yield Axios.post('/api/movie', action.payload)
        } catch (error) {
        console.log('error with element add request', error);
    }
}

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies)
    yield takeEvery('FETCH_GENRES', fetchGenres)
    yield takeEvery('FETCH_ALL_GENRES', fetchAllGenres)
    yield takeEvery('ADD_MOVIE', addMovie)
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// details reducer used to store data from movie clicked in home component
const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
        }
    }

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
