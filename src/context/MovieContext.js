import React, { createContext, useState, useContext, useEffect } from 'react';
import Axios from 'axios';

const API_KEY = '65e043c24785898be00b4abc12fcdaae'
const MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

const MovieContext = createContext();

export const MovieProvider = props => {

  const [movies, setMovies] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = async () => {
    setLoading(true)
  Axios.get(MOVIES_URL)
  .then(({data}) => setMovies([...data.results]))
  .catch(function (error) {
    console.log("Unable to Retrieve Notes", error);
  })
  .then(() => setLoading(false));
}
  return (
    <MovieContext.Provider value={{movies, loading}} {...props} />
  )
}

export const useMovies = () => useContext(MovieContext)

export default MovieProvider

