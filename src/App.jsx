import { useEffect, useState } from "react";
import "./App.css";
import Poster from "./components/Poster";

function App() {
  const [titles, setTitles] = useState([]);
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
      <h1>Movies</h1>
      <ol>
        {titles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ol>
      <Poster />
    </>
  );
}

export default App;
