import React from "react";
import { Link } from "react-router-dom";
import "./movieCard.css";

const MovieItem = ({ movie }) => {
  return (
    <div className="movieItem-container">
      <Link to={`/movies/${movie.id}`}>
        <h3>{movie.title}</h3>
        <img
          className="img-poster"
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt={movie.title + " poster"}></img>
      </Link>
    </div>
  );
};

export default MovieItem;
