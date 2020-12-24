import React from 'react';
import {Container} from './MovieDetails.styles';

export default function MovieDetails({ children, ...restProps }) {
  return (
    <Container {...restProps}>{children}</Container>
  );
};
