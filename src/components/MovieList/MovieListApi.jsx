"use server"

async function MovieListApi() {

    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key='+process.env.API_KEY;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:'Bearer '+process.env.API_AUTH
      }
    };
    
   const response = await fetch(url, options);
    
   const data = await response.json();

   return data;

}


export default MovieListApi;

