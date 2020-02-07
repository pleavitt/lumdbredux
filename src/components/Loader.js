import React, { useContext } from 'react'
import styled from 'styled-components';
import { LoaderContext } from '../context/LoaderContext';
import './Loader.scss'

const Loader = props => {
  const { isLoaderOn } = useContext(LoaderContext)

  return isLoaderOn ? (
    <div className="loader-overlay">
      <div className="spin-wrapper">
        <div className="spinner">
        </div>
      </div>
    </div>
  ) : null
}

export default Loader

export const LoaderOverlay = styled.div`
`;