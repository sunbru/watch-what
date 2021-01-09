import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex:
  flex-direction: column;
  /* linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ) */
  height: 100vh;
  width: 100vw;
  padding: 2rem;
`;

export const GradientOverlay = styled.div`
  background: -moz-linear-gradient(right,  rgba(255,255,255,0) 38%, rgba(255,255,255,0.06) 39%, rgba(0,0,0,0.88) 53%, rgba(0,0,0,1) 55%); /* FF3.6-15 */
  background: -webkit-linear-gradient(right,  rgba(255,255,255,0) 38%,rgba(255,255,255,0.06) 39%,rgba(0,0,0,0.88) 53%,rgba(0,0,0,1) 55%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to left,  rgba(255,255,255,0) 38%,rgba(255,255,255,0.06) 39%,rgba(0,0,0,0.88) 53%,rgba(0,0,0,1) 55%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#1e1b26',GradientType=0 ); /* IE6-9 */

  position: absolute;
  background-size: contain;
  background-size: cover;
  z-index: 1 !important;
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 4px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45vw;
  width: 100%;
  text-align: left;
  padding: 2rem;
  
  background: url(https://image.tmdb.org/t/p/original${props => props.backgroundImage}) no-repeat top right;
  background-size: cover;
  background-position: top;
  -webkit-mask-image: -webkit-gradient(linear, left top, left bottom,
    color-stop(0.00,  rgba(0,0,0,1)),
    color-stop(0.35,  rgba(0,0,0,1)),
    color-stop(0.50,  rgba(0,0,0,1)),
    color-stop(0.65,  rgba(0,0,0,1)),
    color-stop(0.85,  rgba(0,0,0,0.6)),
    color-stop(1.00,  rgba(0,0,0,0)));
`;

export const Title = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 50px;
  font-weight: 400;
`;

export const Body = styled.p``;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;
