"use client"
import "@/components/MovieList/MovieList.scss";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";





function MovieList() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getData = async () => {
    

        const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=aad052a118ea779c5c2ead0c2d24a661';
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization:'Bearer '+process.env.API_AUTH
          }
        };
        
       const response = await fetch(url, options)
        const data = await response.json();
          console.log(data);

      setMovieList(data?.results);
    };
    getData();
  }, []);


  return <div className="movie-list-container">
    <h1 className="movie-list-header">Popular Movies</h1>
    {movieList && <div className="movie-list">{movieList.map((movie, index) => 
    <MovieCard key={index} movieData={movie}></MovieCard>)}</div>
  }
  </div>
}

export default MovieList;
