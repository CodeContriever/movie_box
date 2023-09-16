import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams

const MovieDetails = () => {
  const { id } = useParams(); // Extract movie ID from route parameters
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=9ff2abcab00a574f986e19bc5e425a4f`
        );
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold">{movie.title}</h2>
      <p className="text-gray-600">{movie.release_date}</p>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;
