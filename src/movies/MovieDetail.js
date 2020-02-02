import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Poster } from './Movie';
import Axios from 'axios';

import './MovieDetail.scss';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

const API_KEY = '65e043c24785898be00b4abc12fcdaae'

export const MovieDetail = ({ match }) => {
  const [movie, setMovie] = useState({ id: null });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => {
      // Update the document title using the browser API
      const url = `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${API_KEY}&language=en-US`;
      setIsLoading(true);
      Axios
        .get(url)
        .then(response => setMovie(response.data));
      setIsLoading(false)
    }, []);
  if (isLoading) {
    return (
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    )
  }
  else if (!movie.id) return <div>empty</div>;
  else
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={`${movie.id}`}>
            <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
          </Overdrive>
          <div>
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
}

export default MovieDetail;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
