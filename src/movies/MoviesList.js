/* eslint react/no-did-mount-set-state: 0 */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import Axios from 'axios';

const API_KEY = '65e043c24785898be00b4abc12fcdaae';
const MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;


const MoviesList = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
      Axios.get(MOVIES_URL)
      .then(({data}) => setMovies(data.results))
    }, [])
    return (
      <MovieGrid>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    );
}

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
