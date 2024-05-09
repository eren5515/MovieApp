"use client";

import { useEffect, useState } from "react";
import "@/app/movie/Movie.scss";
import MovieApi from "./MovieApi";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { faStar } from "@fortawesome/free-solid-svg-icons";

export const Movie = ({ targetMovie }) => {
  const genreMap = new Map([
    [28, "Action"],
    [12, "Adventure"],
    [16, "Animation"],
    [35, "Comedy"],
    [80, "Crime"],
    [99, "Documentary"],
    [18, "Drama"],
    [10751, "Family"],
    [14, "Fantasy"],
    [36, "History"],
    [27, "Horror"],
    [10402, "Music"],
    [9648, "Mystery"],
    [10749, "Romance"],
    [878, "Science Fiction"],
    [10770, "TV Movie"],
    [53, "Thriller"],
    [10752, "War"],
    [37, "Western"],
  ]);

  const [movieInfo, setMovieInfo] = useState();

  const splittedTarget = targetMovie.split("%20").join(" ");
  var average = movieInfo?.vote_average;

  useEffect(() => {
    const getData = async () => {
    
       const data = await MovieApi(targetMovie);

      setMovieInfo(data?.results[0]);
    };
    getData();
  }, []);

  return (
    <div className="movie-detail-wrapper">
      {movieInfo && (
        <img
          className="movie-detail-bg"
          src={"http://image.tmdb.org/t/p/w500/" + movieInfo.backdrop_path}
        ></img>
      )}
      {movieInfo && (
        <div className="movie-detail-content">
          <h1 className="movie-detail-header">Movie Detail</h1>
          <div className="movie-detail-div">
            <img
              className="movie-detail-poster"
              src={"http://image.tmdb.org/t/p/w500/" + movieInfo.poster_path}
            ></img>
            <div className="movie-detail-right">
              <div className="movie-detail-rating-and-genre">
                <h2>
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "var(--color-first)" }}
                  />{" "}
                  {Number(average).toFixed(1)}
                </h2>
                <div className="detail-genre-div">
                  <h3>{genreMap.get(movieInfo.genre_ids[0])}</h3>
                  {movieInfo.genre_ids[1] && (
                    <h3>{genreMap.get(movieInfo.genre_ids[1])}</h3>
                  )}
                </div>
              </div>
              <h3>{movieInfo.release_date.split("-")[0]}</h3>
              <h1 className="movie-detail-title">{movieInfo.title}</h1>
              <p className="movie-detail-overview">{movieInfo.overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
