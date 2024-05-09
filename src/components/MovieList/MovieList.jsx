"use client"
import "@/components/MovieList/MovieList.scss";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";




function MovieList() {
  const [movieList, setMovieList] = useState([]);



  useEffect(() => {
    const getData = async () => {
      console.log(process.env.API_AUTH)
    

        const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=aad052a118ea779c5c2ead0c2d24a661';
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYWQwNTJhMTE4ZWE3NzljNWMyZWFkMGMyZDI0YTY2MSIsInN1YiI6IjY2M2JlMjE1NDdhODA4YTcxOGE4ZTI4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zABgE3RPZkyCsSvToIoRCrhd6MmVgRgcd9tCjnVF0lg'
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
