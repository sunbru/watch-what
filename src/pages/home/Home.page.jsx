import React, {useState, useEffect} from 'react';
import {HeaderContainer, MoviesContainer} from '../../containers';
import {MoviesContext} from '../../context';
import {fetchPopular} from '../../adapters';

export default function Home() {
  const [moviesList, setMoviesList] = useState([]);
  useEffect(() => {
    fetchPopular()
    .then(movies => {
      console.log("Inside homepage", movies)
      setMoviesList(movies)
    });
  }, []);
  return (
    <MoviesContext.Provider value={{ moviesList, setMoviesList }}>
      <section id={`home`}>
        <HeaderContainer />
        {
          moviesList.length > 0 ?
          <MoviesContainer /> :
          null
        }
      </section>
    </MoviesContext.Provider>
  );
};
