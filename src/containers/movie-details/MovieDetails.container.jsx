import React,{useContext} from 'react';
import {MovieDetails} from '../../components';
import {SelectedMovieContext} from '../../context';

export default function MovieDetailsContainer(movie) {
  // const { selectedMovie, setMovie } = useContext(SelectedMovieContext);
  // console.log("Inside moviedetailscontainer", selectedMovie)
  // console.log("Inside moviedetailscontainer", movie)
  return (
    <MovieDetails>
      <MovieDetails.Card>
        <MovieDetails.ContentWrap>
          <MovieDetails.Title>{movie.Title}</MovieDetails.Title>
        </MovieDetails.ContentWrap>
      </MovieDetails.Card>
    </MovieDetails>
  );
};
