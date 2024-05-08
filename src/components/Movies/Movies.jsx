import "./Movies.css";

const Movies = ({ movies }) => {
  return (
    <section className="movies">
      {movies.map((movie) => (
        <article className="movie__card" key={movie.id}>
          <img
            className="movie__poster"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster}`}
            alt={`Poster`}
          />
          <div className="movie__info">
            <h2 className="movie__info__vote">{movie.vote}%</h2>
            <h2 className="movie__info__name">{movie.title}</h2>
            <p className="movie__info__date"> {movie.date}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Movies;
