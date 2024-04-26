import { useEffect, useState } from "react";
import "./App.css";
import Posters from "./components/Posters";
import Select from "./components/Select";

function App() {
  const [titles, setTitles] = useState([]);
  const [selectGenre, setSelectGenre] = useState("");

  useEffect(() => {
    const fetchTitles = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=2ba09122096fd3f68677ed55fd74b8a3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${selectGenre}`
        );
        const data = await response.json();
        const movieTitles = data.results.slice(0, 8).map((result) => {
          return result.original_title;
        });
        setTitles(movieTitles);
      } catch (error) {
        console.error("Error fetching movie titles:", error);
      }
    };

    fetchTitles();
  }, [selectGenre]);

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
