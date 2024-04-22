import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Posters = ({ selectGenre }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=2ba09122096fd3f68677ed55fd74b8a3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${selectGenre}`
        );
        const data = await response.json();
        setMovies(data.results.slice(0, 8));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [selectGenre]);

  return (
    <>
      <div className="posters">
        {movies.map((movie, index) => (
          <a key={index} className="article">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={`Poster ${index}`}
            />
            <p className="movie_name">{movie.title}</p>
          </a>
        ))}
      </div>
    </>
  );
};

Posters.propTypes = {
  selectGenre: PropTypes.string.isRequired,
};

export default Posters;
