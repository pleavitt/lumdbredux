/* eslint react/no-did-mount-set-state: 0 */
import React from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import { useMovies } from '../context/MovieContext'

const MoviesList = () => {
    const { movies, loading } = useMovies();

    return (
      <MovieGrid>
        {movies && movies.map(movie => (
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
