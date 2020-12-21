import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 350px;
  width: 100%;
  height: 650px;
  /* border: 1px solid black; */
  border-radius: 5px;
  margin: 2rem 0;
`;

export const HeroImage = styled.div`
  position: relative;
  box-sizing: border-box;
  background: url(https://image.tmdb.org/t/p/original${props => props.backgroundImage}) no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 380px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  -webkit-mask-image: -webkit-gradient(linear, left top, left bottom,
    color-stop(0.00,  rgba(0,0,0,1)),
    color-stop(0.35,  rgba(0,0,0,1)),
    color-stop(0.50,  rgba(0,0,0,1)),
    color-stop(0.65,  rgba(0,0,0,1)),
    color-stop(0.85,  rgba(0,0,0,0.6)),
    color-stop(1.00,  rgba(0,0,0,0)));
`;
export const GradientOverlay = styled.div`
  background: -moz-linear-gradient(top,  rgba(255,255,255,0) 38%, rgba(255,255,255,0.06) 39%, rgba(0,0,0,0.88) 53%, rgba(0,0,0,1) 55%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 38%,rgba(255,255,255,0.06) 39%,rgba(0,0,0,0.88) 53%,rgba(0,0,0,1) 55%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom,  rgba(255,255,255,0) 38%,rgba(255,255,255,0.06) 39%,rgba(0,0,0,0.88) 53%,rgba(0,0,0,1) 55%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#1e1b26',GradientType=0 ); /* IE6-9 */

  position:absolute;
  background-size: contain;
  background-size: cover;
  z-index:1 !important;
  width: 100%;
  height: 650px;
  display:block;
  border-radius:4px;
`;
export const ContentWrap = styled.div`
  position: absolute;
  bottom: 0;
  align-self: flex-end;
  vertical-align: bottom;
  padding: 2rem;
  background-color: #000000;
  width: 100%;
  height: 40%;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  overflow: hidden;
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
