import { useEffect, useState } from "react";
import "./App.css";
import Posters from "./components/Posters";
import Select from "./components/Select";

function App() {
  const [titles, setTitles] = useState([]);
  const [selectGenre, setSelectGenre] = useState("");
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
        const movieTitles = response.results.slice(0, 8).map((result) => {
          return result.original_title;
        });

        setTitles(movieTitles);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <div>
        <h1>Movies</h1>
        <Select setSelectGenre={setSelectGenre} />
        <div className="container">
          <Posters titles={titles} selectGenre={selectGenre} />
        </div>
      </div>
    </>
  );
}

export default App;
