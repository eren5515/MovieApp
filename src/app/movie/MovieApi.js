"use server"

async function MovieApi(targetMovie) {

    const url =
      "https://api.themoviedb.org/3/search/movie?query=" +
      targetMovie +
      "&include_adult=false&language=en-US&page=1&api_key=" + process.env.API_KEY;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer "+process.env.API_AUTH,
      },
    };
   
      const response = await fetch(url, options);
      const data = await response.json();

   return data;

}


export default MovieApi;

