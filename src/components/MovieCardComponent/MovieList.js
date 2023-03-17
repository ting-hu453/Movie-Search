import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ popularMovies }) => {
  return (
    <div className="movielist">
      {popularMovies?.map((movie) => {
        return <MovieItem key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default MovieList;
