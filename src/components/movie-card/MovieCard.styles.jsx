import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: url(https://image.tmdb.org/t/p/original${props => props.backgroundImage}) no-repeat center center;
  background-size: cover;
  max-width: 350px;
  width: 100%;
  max-height: 400px;
  height: auto;
  border: 1px solid black;
  border-radius: 15px;
  margin: 2rem 0;
`;

export const ContentWrap = styled.div`
  align-self: flex-end;
  vertical-align: bottom;
  padding: 2rem;
  background-color: black;
  width: 100%;
  border-radius: 15px;
`;

export const Blur = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%; right: 0;
  background-size: cover;
  border-radius: 11px;
`;

export const Header = styled.h3`
  color: white;
`;

export const Body = styled.p`
  color: white;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 0 auto;
`;
