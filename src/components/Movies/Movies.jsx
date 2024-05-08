import "./Movies.css";

const Movies = ({ movies }) => {
  const formatDate = (premiere) => {
    const date = new Date(premiere);
    const confiDate = { month: "short", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-Us", confiDate);
  };
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
            <h3 className="movie__info__date"> {formatDate(movie.date)}</h3>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Movies;
