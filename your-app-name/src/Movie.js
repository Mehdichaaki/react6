
import React from 'react';

function Movie({ movie }) {
  return (
    <div className="movie">
      <img src={movie.posterURL} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
}

export default Movie;
