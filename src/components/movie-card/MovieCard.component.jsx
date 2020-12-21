import React from 'react';
import {Container, Card, ContentWrap, Header, Body, Blur, Image} from './MovieCard.styles';

export default function MovieCard({ children, ...restProps }) {
  return (
    <Container {...restProps}>{children}</Container>
  );
};

MovieCard.Card = function MovieCardCard({ children, ...restProps }) {
  return (
    <Card {...restProps}>{children}</Card>
  );
};

MovieCard.ContentWrap = function MovieCardContentWrap({ children, ...restProps }) {
  return (
    <ContentWrap {...restProps}>{children}</ContentWrap>
  );
};

MovieCard.Header = function MovieCardHeader({ children, ...restProps }) {
  return (
    <Header {...restProps}>{children}</Header>
  );
};

MovieCard.Body = function MovieCardBody({ children, ...restProps }) {
  return (
    <Body {...restProps}>{children}</Body>
  );
};

MovieCard.Blur = function MovieCardBlur() {
  return (
    <Blur />
  );
};

MovieCard.Image = function MovieCardImage({ children, ...restProps }) {
  return (
    <Image {...restProps} />
  );
};
