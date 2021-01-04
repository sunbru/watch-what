import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex:
  flex-direction: column;
  background: url(${props => props.backgroundImage}) no-repeat center center;
  height: 100vh;
  width: 100vw;
`;

export const Card = styled.div``;

export const Title = styled.h3``;

export const Body = styled.p``;

export const ContentWrap = styled.div`
  display: flex;
  color: white;
`;
