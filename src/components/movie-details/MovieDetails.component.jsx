import React from 'react';
import {Container, Card, ContentWrap, Title, Body} from './MovieDetails.styles';

export default function MovieDetails({ children, ...restProps }) {
  return (
    <Container {...restProps}>{children}</Container>
  );
};

MovieDetails.Card = function MovieDetailsCard({ children, ...restProps }) {
  return (
    <Card {...restProps}>{children}</Card>
  );
};

MovieDetails.Title = function MovieDetailsTitle({ children, ...restProps }) {
  return (
    <Title {...restProps}>{children}</Title>
  );
};

MovieDetails.Body = function MovieDetailsBody({ children, ...restProps }) {
  return (
    <Body {...restProps}>{children}</Body>
  );
};

MovieDetails.ContentWrap = function MovieDetailsContentWrap({ children, ...restProps }) {
  return (
    <ContentWrap {...restProps}>{children}</ContentWrap>
  );
};

// Title: "Wonder Woman 1984", Year: "2020", Rated: "PG-13", Released: "25 Dec 2020", Runtime: "151 min", …}
// Actors: "Pedro Pascal, Gal Gadot, Connie Nielsen, Chris Pine"
// Awards: "N/A"
// BoxOffice: "N/A"
// Country: "USA, UK, Spain"
// DVD: "N/A"
// Director: "Patty Jenkins"
// Genre: "Action, Adventure, Fantasy"
// Language: "English"
// Metascore: "N/A"
// Plot: "Fast forward to the 1980s as Wonder Woman's next big screen adventure finds her facing two all-new foes: Max Lord and The Cheetah."
// Poster: "https://m.media-amazon.com/images/M/MV5BNWY2NWE0NWEtZGUwMC00NWMwLTkyNzUtNmIxMmIyYzA0MjNiXkEyXkFqcGdeQXVyMTA2OTQ3MTUy._V1_SX300.jpg"
// Production: "DC Comics, Warner Bros., DC Entertainment, Atlas Entertainment, The Stone Quarry"
// Rated: "PG-13"
// Ratings: Array(1)
// 0: {Source: "Rotten Tomatoes", Value: "70%"}
// length: 1
// __proto__: Array(0)
// Released: "25 Dec 2020"
// Response: "True"
// Runtime: "151 min"
// Title: "Wonder Woman 1984"
// Type: "movie"
// Website: "N/A"
// Writer: "Geoff Johns (story), Patty Jenkins (story), Dave Callaham (screenplay), Geoff Johns (screenplay), Patty Jenkins (screenplay), William Moulton Marston (Wonder Woman created by)"
// Year: "2020"
// imdbID: "tt7126948"
// imdbRating: "N/A"
// imdbVotes: "N/A"
