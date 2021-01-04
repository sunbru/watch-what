import React,{useContext} from 'react';
import {MovieDetails} from '../../components';
import {SelectedMovieContext, BackgroundImageContext} from '../../context';

export default function MovieDetailsContainer() {
  const {selectedMovie} = useContext(SelectedMovieContext);
  console.log("Inside moviedetailscontainer", selectedMovie)
  return (
    <MovieDetails backgroundImage={selectedMovie.Poster}>
      <MovieDetails.Card>
        <MovieDetails.ContentWrap>
          <MovieDetails.Title>{selectedMovie.Title}</MovieDetails.Title>
          <MovieDetails.Body>{selectedMovie.Plot}</MovieDetails.Body>
        </MovieDetails.ContentWrap>
      </MovieDetails.Card>
    </MovieDetails>
  );
};
