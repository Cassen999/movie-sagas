# GETTING STARTED
- [x] Make the 2 tables in the sql file
- [x] Npm install and runs
- [x] Make the junction table
- [x] Set up component files

## MOVIE.ROUTER.JS


## APP
- [x] Create routes for each component


## INDEX
- [x] Movies reducer
    - [x] Holds Movie info
- [x] FetchMovies saga
    - [x] GET to server to get all movies and push into movies reducer
- [x] Genres reducer
    - [x] Holds data for movie that is clicked on
- [x] Genres saga
    - [x] GET to server to get movie by id and push into genres reducer
- [] AddMovie saga
    - [] POST to database to add new movie to database

## HOME
- [x] Displays list of movies with photo, name and description
- [x] GET dispatch to saga and reducer
    - [x] Map Home reducer
- [x] Movie poster on click routes to the details view

## DETAILS
- [x] Displays poster, title, description, and genres
- [x] Back to list button

## ADD MOVIE
- [x] Displays:
    - [x] Input for movie title
    - [x] Input for poster URL
    - [x] Text area for movie description
    - [x] Dropdown of available genres
- [x] Local state to hold input data
- [x] Cancel button routes back to Home
- [x] Save button sends all data to database
    - [x] Dispatch to saga for POST request