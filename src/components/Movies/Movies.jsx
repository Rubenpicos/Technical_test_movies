import { useEffect } from "react";
import useDescription from "../../hooks/useDescription";
import "./Movies.css";

const Movies = ({ movies }) => {
  const { description, fetchMovieDescription } = useDescription();

  useEffect(() => {
    if (description) {
      alert(description);
    }
  }, [description]);

  const handleClick = async (movieId) => {
    await fetchMovieDescription(movieId);
  };

  return (
    <section className="movies">
      {movies.map((movie) => (
        <article key={movie.id} onClick={() => handleClick(movie.id)}>
          <img
            className="movie__poster"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster}`}
            alt={`Poster`}
          />
          <h2 className="movie__name">{movie.title}</h2>
          <p>popularity: {movie.popularity}</p>
        </article>
      ))}
    </section>
  );
};

export default Movies;
