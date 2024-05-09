import "@/components/MovieList/MovieCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { faStar } from "@fortawesome/free-solid-svg-icons";

function MovieCard({ movieData }) {
  var average= movieData.vote_average;
  return (
    <div className="movie-card">
      <Link href={"/movie/" + movieData.title}>
        <img
          src={"http://image.tmdb.org/t/p/w500/" + movieData.poster_path}
          
        ></img>
      </Link>
      <div className="movie-card-info">
        <h2>
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "var(--color-first)" }}
          />
          {"  "}
          {Number(average).toFixed(1)}
        </h2>
        <Link href={"/movie/" + movieData.title}>
          <h1>{movieData.title}</h1>
        </Link>
        <h2>{movieData.release_date.split("-")[0]}</h2>
      </div>
    </div>
  );
}

export default MovieCard;
