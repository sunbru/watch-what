import React,{useContext} from 'react';
import {MovieDetails} from '../../components';
import {SelectedMovieContext, BackgroundImageContext} from '../../context';

export default function MovieDetailsContainer() {
  const {selectedMovie} = useContext(SelectedMovieContext);
  console.log("Inside moviedetailscontainer", selectedMovie)
  return (
    <MovieDetails backgroundImage={selectedMovie.backdrop_path}>
      <MovieDetails.Card>
        <MovieDetails.ContentWrap>
          <MovieDetails.Title>{selectedMovie.title}</MovieDetails.Title>
          <MovieDetails.Body>{selectedMovie.overview}</MovieDetails.Body>
          <MovieDetails.Body>{Date.parse(selectedMovie.release_date)}</MovieDetails.Body>
        </MovieDetails.ContentWrap>
      </MovieDetails.Card>
    </MovieDetails>
  );
};
