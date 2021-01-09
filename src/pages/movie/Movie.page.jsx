import React, {useState, useEffect} from 'react';
import {HeaderContainer, MovieDetailsContainer} from '../../containers';
import {SelectedMovieContext} from '../../context';
import {useLocation} from 'react-router-dom';
import {fetchMovie} from '../../adapters';

export default function Movie() {
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [loaded, setLoaded] = useState(false);
  let location = useLocation();
  useEffect(() => {
    fetchMovie(location.pathname)
    .then(movieData => {
      setLoaded(true);
      setSelectedMovie(movieData);
    });
  }, []);
  return (
    <SelectedMovieContext.Provider value={{ selectedMovie, setSelectedMovie }}>
      <section id="movie-page">
        <HeaderContainer />
        {
          loaded && selectedMovie ?
          <MovieDetailsContainer  /> :
          null
        }
      </section>
    </SelectedMovieContext.Provider>
  )
}
