// MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
      <h2 className="text-xl font-semibold mt-2">{movie.title}</h2>
      <p className="text-gray-600">{movie.release_date}</p>
    </div>
  );
};

export default MovieCard;
