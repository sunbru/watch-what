import React from 'react';
import {Container, Card} from './MovieDetails.styles';

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
