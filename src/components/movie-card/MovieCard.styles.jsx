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

  max-width: 350px;
  width: 100%;
  height: auto;
  border: 1px solid black;
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem 0;
`;

export const Header = styled.h3``;

export const Body = styled.p``;

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 0 auto;
`;
