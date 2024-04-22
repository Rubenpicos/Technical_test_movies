import { useEffect, useState } from "react";

const Posters = () => {
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    const movies = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmEwOTEyMjA5NmZkM2Y2ODY3N2VkNTVmZDc0YjhhMyIsInN1YiI6IjY1ZDM2MGFmZTA0ZDhhMDE2Mzk4YWI0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2u9B1noWUTd7Y0nQQ6mw4t5fsBNMcExAXgW97P5ce0Y",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      movies
    )
      .then((response) => response.json())
      .then((response) => {
        const postersMovie = response.results
          .slice(0, 8)
          .map((movie) => movie.poster_path);
        setPosters(postersMovie);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="posters">
        {posters.map((poster, index) => (
          <a key={index} className="article">
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster}`}
              alt={`Poster ${index}`}
            />
            <p className="movie_name">título</p>
          </a>
        ))}
      </div>
    </>
  );
};

export default Posters;
