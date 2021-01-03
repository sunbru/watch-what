import React, {useState, useEffect} from 'react';
import {MovieDetailsContainer} from '../../containers';
import {SelectedMovieContext} from '../../context';
import {useLocation} from 'react-router-dom';
import {fetchOMDBMovie} from '../../adapters';

export default function Movie() {
  const [selectedMovie, setSelectedMovie] = useState([]);
  let location = useLocation();
  useEffect(() => {
    return fetchOMDBMovie(location.pathname)
    .then(movieData => {
      setSelectedMovie(movieData)
    });
  }, []);
  console.log(selectedMovie)
  return (
    <SelectedMovieContext.Provider value={{ selectedMovie, setSelectedMovie }}>
        {
          selectedMovie ?
          <MovieDetailsContainer movie={selectedMovie}/> :
          null
        }
    </SelectedMovieContext.Provider>
  )
}
