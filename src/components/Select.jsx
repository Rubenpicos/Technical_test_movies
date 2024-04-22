import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Select = ({ setSelectGenre }) => {
  const [genres, setGenres] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmEwOTEyMjA5NmZkM2Y2ODY3N2VkNTVmZDc0YjhhMyIsInN1YiI6IjY1ZDM2MGFmZTA0ZDhhMDE2Mzk4YWI0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2u9B1noWUTd7Y0nQQ6mw4t5fsBNMcExAXgW97P5ce0Y",
            },
          }
        );
        const data = await response.json();
        setGenres([...data.genres, { id: "999", name: "No Movies Genre" }]);
      } catch (error) {
        console.error("Error with genres:", error);
      }
    };

    fetchGenres();
  }, []);

  const handleGenreChange = (event) => {
    setSelectGenre(event.target.value);
    if (event.target.value === "999") {
      setErrorMessage("There are no movies with that genre");
    } else {
      setErrorMessage("All these movies have this genre:");
    }
  };

  return (
    <div className="genre">
      <select name="genre" className="btn" onChange={handleGenreChange}>
        <option value="">Choose a genre</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};

Select.propTypes = {
  setSelectGenre: PropTypes.func.isRequired,
};

export default Select;
