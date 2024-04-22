import { useEffect, useState } from "react";
import PropTypes from "prop-types";
const Select = ({ setSelectGenre }) => {
  const [genres, setGenres] = useState([]);

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
        setGenres(data.genres);
      } catch (error) {
        console.error("Error with genres:", error);
      }
    };

    fetchGenres();
  }, []);

  const handleGenreChange = (event) => {
    setSelectGenre(event.target.value);
  };

  return (
    <div className="genre">
      <select name="genre" className="btn" onChange={handleGenreChange}>
        <option value="">Choose an genre</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  setSelectGenre: PropTypes.func.isRequired,
};
export default Select;
