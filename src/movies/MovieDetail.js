import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Poster } from './Movie';
import axios from 'axios';

import './MovieDetail.scss';
import { LoaderContext } from '../context/LoaderContext';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

const API_KEY = '65e043c24785898be00b4abc12fcdaae'

export const MovieDetail = ({ match }) => {
  const [movie, setMovie] = useState({ id: null });
  const { setLoader } = useContext(LoaderContext)
  useEffect(
    () => {
      async function fetchData() {
        // Update the document title using the browser API
        const url = `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${API_KEY}&language=en-US`;
        setLoader(true);
        const { data } = await axios.get(url);
        setMovie(data)
        setLoader(false)
      }
      fetchData()
    }, [match.params.id, setLoader]);
  if (!movie.id) return <div>empty</div>;
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
