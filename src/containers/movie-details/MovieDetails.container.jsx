import React,{useContext} from 'react';
import {MovieDetails} from '../../components';
import {MovieContext} from '../../context';

export default function MovieDetailsContainer() {
  const { selectedMovie, setMovie } = useContext(MovieContext);
  console.log("Inside moviedetailscontainer", selectedMovie)
  return (
    <MovieDetails>
      <MovieDetails.Card>
        HEY
      </MovieDetails.Card>
    </MovieDetails>
  );
};
