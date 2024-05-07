import { useEffect, useState } from "react";
import Select from "./components/Select";
import Movies from "./components/Movies/Movies";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectGenre, setSelectGenre] = useState("");

  useEffect(() => {
    const fetchTitles = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=2ba09122096fd3f68677ed55fd74b8a3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${selectGenre}`
        );
        const data = await response.json();
        const movies = data.results.slice(0, 8).map((result) => {
          return {
            id: result.id,
            title: result.original_title,
            poster: result.poster_path,
            popularity: result.popularity,
            date: result.release_date,
          };
        });
        setMovies(movies);
      } catch (error) {
        console.error("Error fetching movie titles:", error);
      }
    };

    fetchTitles();
  }, [selectGenre]);

  return (
    <>
      <div className="container">
        <h1>Movies</h1>

        <Select setSelectGenre={setSelectGenre} />
        <div>
          <Movies movies={movies} selectGenre={selectGenre} />
        </div>
      </div>
    </>
  );
}

export default App;
