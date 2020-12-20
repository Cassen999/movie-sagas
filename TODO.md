# GETTING STARTED
- [x] Make the 2 tables in the sql file
- [x] Npm install and runs
- [x] Make the junction table
- [x] Set up component files

## MOVIE.ROUTER.JS


## APP
- [x] Create routes for each component


## INDEX
- [] Home reducer
    - [] Holds Movie info
- [] Home saga
    - [] GET to server to get all movies and push into Home reducer
- [] Details reducer
    - [] Holds data for movie that is clicked on
- [] Details saga
    - [] GET to server to get movie by id and push into Details reducer
- [] AddMovie saga
    - [] POST to database to add new movie to database

## HOME
- [x] Displays list of movies with photo, name and description
- [x] GET dispatch to saga and reducer
    - [x] Map Home reducer
- [x] Movie poster on click routes to the details view

## DETAILS
- [x] Displays poster, title, description, and genres
- [] Back to list button
    - [] Clear redux state with another if clause that return initialState

## ADD MOVIE
- [] Displays:
    - [] Input for movie title
    - [] Input for poster URL
    - [] Text area for movie description
    - [] Dropdown of available genres
- [] Local state to hold input data
- [] Cancel button routes back to Home
- [] Save button sends all data to database
    - [] Dispatch to saga for POST request
    - [] Clear inputs