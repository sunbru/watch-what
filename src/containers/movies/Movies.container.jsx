import React, {useContext} from 'react';
import {MovieCard} from '../../components';
import {MoviesContext} from '../../context';
import heart from '../../_assets/img/heart-outline.svg'

export default function MoviesContainer({ movies }) {
  const { moviesList } = useContext(MoviesContext);
  return (
    <section id="movies-container">
      <MovieCard>
        {
          moviesList.map(({id, title, overview, backdrop_path, vote_average, vote_count, release_date, original_language, genre_ids}) => {
            return (
              <MovieCard.Card key={id + title} backgroundImage={backdrop_path}>
                <MovieCard.HeroImage backgroundImage={backdrop_path}/>
                <MovieCard.ContentWrap>
                  <MovieCard.Header>{title}</MovieCard.Header>
                  <MovieCard.GenresWrap genres={genre_ids} />
                  <MovieCard.SummaryWrap>
                    <MovieCard.Ratings>{vote_average} <img src={heart}/>{vote_count}</MovieCard.Ratings>
                  </MovieCard.SummaryWrap>
                  <MovieCard.Body overview={overview} />
                  <MovieCard.Footer />
                </MovieCard.ContentWrap>
              </MovieCard.Card>
            )
          })
        }
      </MovieCard>
    </section>
  )
}
