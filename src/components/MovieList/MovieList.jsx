"use client"
import "@/components/MovieList/MovieList.scss";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import MovieListApi from "./MovieListApi";




function MovieList() {
  const [movieList, setMovieList] = useState([]);



  useEffect(() => {
    const getData = async () => {
    
       const data = await MovieListApi();

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
