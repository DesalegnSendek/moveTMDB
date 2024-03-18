import { useState, useEffect } from "react";

export const useFetch = (apiPath) => {
    const [data, setData ] = useState([]);
     const url =  `https://api.themoviedb.org/3/${apiPath}?api_key=7024dd489c8c535c624bbc24cfd29a12&language=en-US&query=avatar&page=1`;
  
    useEffect(() => {
      async function fetchMovies() {
        const response = await fetch(url);
        const json = await response.json();
        setData(json.results);
      }

      fetchMovies();
    }, [url]);
  
    return { data }
  
}
