const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// router.get('/', (req, res) => {
//   // Add query to get all genres
//   res.sendStatus(500)
// });

router.get('/', (req, res) => {
  movieId = req.query.id; 
  console.log('movie id is', movieId); 
  // Add query to get all genres
  const sqlText = `
    SELECT title, name FROM movie_genres
    JOIN movies ON movies.id = movie_genres.movie_id
    JOIN genres ON genres.id = movie_genres.genre_id
    WHERE movies.id = $1;`
  pool.query(sqlText)
    .then((result) => {
      res.send(result.rows, movieId)
      console.log(result.rows)
    })
    .catch((error) => {
      console.log(`Error making db query ${sqlText}`, error)
    })
  })
 
module.exports = router;