import React, {useState, useEffect} from 'react';
import {HeaderContainer} from '../../containers';
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
      </section>
    </MoviesContext.Provider>
  );
};
