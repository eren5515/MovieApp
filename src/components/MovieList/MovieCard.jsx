import "@/components/MovieList/MovieCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons";

function MovieCard({ movieData }) {
  return (
    <div className="movie-card">
      <img
        src={"http://image.tmdb.org/t/p/w500/" + movieData.poster_path}
      ></img>
      <div className="movie-card-info">
        <h2>
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "var(--color-first)" }}
          />
          {"  "}
          {movieData.vote_average.toFixed(1)}
        </h2>
        <h1>{movieData.title}</h1>
        <h2>{movieData.release_date.split("-")[0]}</h2>
      </div>
    </div>
  );
}

export default MovieCard;
