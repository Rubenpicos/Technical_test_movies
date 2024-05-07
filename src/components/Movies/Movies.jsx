import "./Movies.css";
import useDescription from "../../hooks/useDescription";

const Movies = ({ movies }) => {
  // const {description, fetchMovieDescription} = useDescription()
  // const handleClick = async (movieId) => {
  //   await fetchMovieDescription(movieId);
  // };

  return (
    <section className="movies">
      {movies.map((movie) => (
        <article
          className="movie__card"
          key={movie.id}
          onClick={() => handleClick(movie.id)}
        >
          <img
            className="movie__poster"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster}`}
            alt={`Poster`}
          />
          <h2 className="movie__name">{movie.title}</h2>
          <p> {movie.date}</p>
        </article>
      ))}
      ;
    </section>
  );
};

export default Movies;
