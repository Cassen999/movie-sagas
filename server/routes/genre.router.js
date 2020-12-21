const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// This gets all genres
router.get('/', (req, res) => {
  // Add query to get all genres
  const sqlText = `SELECT * FROM genres`
  pool.query(sqlText)
  .then((result) => {
    res.send(result.rows)
    console.log(result.rows)
  })
  .catch((error) => {
    console.log('Error making db query get all genres', error)
    res.sendStatus(500)
  })
});

// This gets a specific movie's genre based on the genre id
router.get('/:id', (req, res) => {
  let movieId = req.params.id; 
  console.log('movie id is'); 
  const sqlText = `
    SELECT title, name FROM movie_genres
    JOIN movies ON movies.id = movie_genres.movie_id
    JOIN genres ON genres.id = movie_genres.genre_id
    WHERE movies.id = $1;`
  pool.query(sqlText, [movieId])
    .then((result) => {
      res.send(result.rows)
      console.log(result.rows)
    })
    .catch((error) => {
      console.log(`Error making db query ${sqlText}`, error)
    })
  })
 
module.exports = router;