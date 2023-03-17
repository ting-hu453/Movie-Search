import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../api/api";
import Header from "../../components/HeaderComponent/Header";
import "./movieDetails.css";

const MovieDetails = () => {
  const [detail, setDetail] = useState({});
  const params = useParams();
  useEffect(() => {
    getMovie(`${params.id}`).then((data) => setDetail(data));
  }, []);

  const covertTime = (time) => {
    let h = Math.floor(time / 60);
    let min = time - h * 60;

    return h.toString() + "h" + min.toString() + "min";
  };

  console.log("In details ", detail);
  return (
    <div>
      <Header />
      <div className="movie-details">
        <h1>{detail.original_title}</h1>
        <div className="movie-details-wrapper">
          <div className="poster-wrapper">
            <img
              className="detail-img-poster"
              src={"https://image.tmdb.org/t/p/w500" + detail.poster_path}
              alt={detail.title + " poster"}></img>
          </div>

          <div className="info-wrapper">
            <h4>
              Status: <span>{detail.status}</span>
            </h4>
            <h4>
              Vote: <span>{detail.vote_average}/10</span>
            </h4>
            <h4 className="info-overview">
              Overview: <span>{detail.overview}</span>
            </h4>
            <h4>
              Release Date: <span>{detail.release_date}</span>
            </h4>
            <h4>
              Runtime: <span>{covertTime(detail.runtime)} </span>
            </h4>
            <h4 className="info-languages">
              Spoken Languages:
              <span>
                {detail?.spoken_languages?.map((language, index) => {
                  return <p key={index}> {language.english_name} </p>;
                })}
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
