import React, {useContext} from 'react';
import {MovieDetailsContainer} from '../../containers';
import {MovieContext} from '../../context';

export default function Movie() {
  const { movie, setMovie } = useContext(MovieContext);
  return (
    <MovieContext.Provider value={{ movie, setMovie }}>
      <MovieDetailsContainer>
        {
          movie.length > 0 ?
          movie :
          null
        }
      </MovieDetailsContainer>
    </MovieContext.Provider>
  )
}
