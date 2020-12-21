import React, {useContext} from 'react';
import {MovieCard} from '../../components';
import {MoviesContext} from '../../context';

export default function MoviesContainer({ movies }) {
  const { moviesList } = useContext(MoviesContext);
  return (
    <section id="movies-container">
      <MovieCard>
        {
          moviesList.map(({id, title, overview, backdrop_path}) => {
            return (
              <MovieCard.Card key={id + title} backgroundImage={backdrop_path}>
                <MovieCard.HeroImage backgroundImage={backdrop_path}/>
                <MovieCard.ContentWrap>
                  <MovieCard.Header>{title}</MovieCard.Header>
                  <MovieCard.Body>{overview}</MovieCard.Body>
                </MovieCard.ContentWrap>
                {/*<MovieCard.Image
                  src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                  alt={`${title} poster`}
                />*/}
              </MovieCard.Card>
            )
          })
        }
      </MovieCard>
    </section>
  )
}
