import React, {useState, useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import {Container, Card, ContentWrap, GradientOverlay, GenresWrap, SummaryWrap, HeroImage, Header, LearnMore, Footer, Genre, Body, Ratings, Blur, Image} from './MovieCard.styles';
import {MovieContext} from '../../context';
import {findGenre} from '../../helpers';

export default function MovieCard({ children, ...restProps }) {
  return (
    <Container {...restProps}>{children}</Container>
  );
};

MovieCard.Card = function MovieCardCard({ children, ...restProps }) {
  return (
    <Card {...restProps}>
      <GradientOverlay>
        {children}
      </GradientOverlay>
    </Card>
  );
};

MovieCard.SummaryWrap = function MovieCardSummaryWrap({ children, ...restProps }) {
  return (
    <SummaryWrap {...restProps}>
      Summary
      {children}
    </SummaryWrap>
  );
};

MovieCard.ContentWrap = function MovieCardContentWrap({ children, ...restProps }) {
  return (
    <ContentWrap {...restProps}>{children}</ContentWrap>
  );
};

MovieCard.HeroImage = function MovieCardHeroImage({ children, ...restProps }) {
  return (
    <HeroImage {...restProps}>{children}</HeroImage>
  );
};

MovieCard.GenresWrap = function MovieCardGenresWrap({ genres }) {
  return (
    <GenresWrap>
    {
      genres.map(id => {
        const genre = findGenre(id);
        return (
          <Genre key={id+genre.name}>{genre.name}</Genre>
        )
      })
    }
    </GenresWrap>
  );
};

MovieCard.Header = function MovieCardHeader({ children, ...restProps }) {
  return (
    <Header {...restProps}>{children}</Header>
  );
};

MovieCard.Genre = function MovieCardGenre({ children, ...restProps }) {
  return (
    <Genre {...restProps}>{children}</Genre>
  );
};

MovieCard.Body = function MovieCardBody({ overview }) {

  return (
    <Body>
    {
      `${overview.substring(1, 150)}...`
    }
    </Body>
  );
};

MovieCard.Ratings = function MovieCardRatings({ children, ...restProps }) {
  return (
    <Ratings {...restProps}>{children}</Ratings>
  );
};

MovieCard.Footer = function MovieCardFooter({ title }) {
  const [movie, setMovie] = useState("");
  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();
    console.log(movie)
    setMovie(title);
    history.push(`/movie/${title}`)
  };

  return (
    <Footer>
      <div class="watch-now">&#9658; WATCH NOW</div>
      <LearnMore onClick={handleClick} to={`/movie/${title}`}>LEARN MORE</LearnMore>
      <div class="share"><i class="fa fa-share-alt"></i></div>
    </Footer>
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
