/* eslint react/no-did-mount-set-state: 0 */
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import { MoviesContext } from '../App';
import axios from 'axios';

const MoviesList = props => {
  const [movies, setMovies] = useContext(MoviesContext);
  const url = 'https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(url);
        setMovies(result.data.results);
        setIsLoading(false);
      };
      if (movies.length === 0){
        fetchData();
      } else console.log('data already fetched')
  }, []);

  return (
    <React.Fragment>
    {
      isLoading ? (<div className="loading">Loading</div>) :
      (
        <MovieGrid>
          {movies.map(movie => {
            return (<Movie key={movie.id} movie={movie} />);
          })}
        </MovieGrid>
      )
    }
    </React.Fragment>
  )
}

export default MoviesList

const MovieGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
