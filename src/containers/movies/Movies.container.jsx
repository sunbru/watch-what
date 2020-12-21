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
                    {/*{
                      genre_ids.map(id => {
                        const genre = findGenre(id);
                        return (
                          <MovieCard.Genre key={title+id}>{genre.name}</MovieCard.Genre>
                        )
                      })
                    }
                  </MovieCard.GenresWrap>*/}
                  <MovieCard.SummaryWrap>
                    <MovieCard.Ratings>{vote_average} <img src={heart}/>{vote_count}</MovieCard.Ratings>
                  </MovieCard.SummaryWrap>
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

// id: 613504
// original_language: "en"
// original_title: "After We Collided"
// overview: "Tessa finds herself struggling with her complicated relationship with Hardin; she faces a dilemma that could change their lives forever."
// popularity: 543.646
// poster_path: "/kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg"
// release_date: "2020-09-02"
// title: "After We Collided"
// video: false
// vote_average: 7.3
// vote_count: 2420
