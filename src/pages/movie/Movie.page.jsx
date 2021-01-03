import React, {useState, useEffect} from 'react';
import {MovieDetailsContainer} from '../../containers';
import {MovieContext} from '../../context';
import {useLocation} from 'react-router-dom';
import {fetchOMDBMovie} from '../../adapters';

export default function Movie() {
  const [selectedMovie, setMovie] = useState([]);
  let location = useLocation();
  useEffect(() => {
    fetchOMDBMovie(location.pathname)
    .then(movieData => {
      console.log("Inside movie detailed page", movieData)
      setMovie(movieData)
    });
  }, []);
  return (
    <MovieContext.Provider value={{ selectedMovie, setMovie }}>
      <MovieDetailsContainer>
        {
          selectedMovie ?
          selectedMovie :
          null
        }
      </MovieDetailsContainer>
    </MovieContext.Provider>
  )
}
