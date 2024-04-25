import { useState } from "react";

const useDescription = () => {
  const [description, setDescription] = useState("");

  const fetchMovieDescription = async (movieId) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=2ba09122096fd3f68677ed55fd74b8a3&language=en-US`
      );
      const data = await response.json();
      setDescription(data.overview);
    } catch (error) {
      console.error("Error fetching movie description:", error);
    }
  };

  return { description, fetchMovieDescription };
};

export default useDescription;
