import styled from 'styled-components/macro';
import {Link as ReactRouterLink} from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  margin-top: 10px;
  height: 80px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
  /* filter: brightness(0) invert(1); */
  width: 50px;
  height: 50px;
  margin-right: 1rem;
  transform: translateX(0px);
  transition: all 0.5s ease-in;

  display: inline-block;
  color: #303030;
  &:hover {
    transform: translateX(1rem);
  }

  /* @media (min-width: 1449px) {
    width: 40px;
    height: 40px;
  } */

  @media (max-width: 1000px) {
    width: 45px;
    height: 45px;
  }
`;

export const LogoWrap = styled(ReactRouterLink)`
  display: flex;
  vertical-align: center;
  text-decoration: none;
`;

export const LogoText = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 400;
  color: white;
  /* color: #303030; */
  text-decoration: none;
  vertical-align: center;
  margin: auto;

  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  &>:first-child, &>:nth-child(2) {
    margin-right: 1rem;
  }
`;

export const Anchor = styled.a`
  font-size: 1.5rem;
  font-weight: 500;
  color: #ffffff;
  position: relative;
  text-decoration: none;
  margin-right: 1rem;
  &:after {
    position: absolute;
    left: 0%;
    content: '';
    height: 2px;
    background: #ffffff;
    transition: all 0.5s ease-in;
    width: 0;
    bottom: -1px;
  }
  &:hover:after {
    width: 70%;
    left: 0;
  }

  @media (max-width: 1000px) {
    font-size: 1.2rem;
    display: none !important;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  font-size: 1.5rem;
  font-weight: 500;
  color: #ffffff;
  position: relative;
  text-decoration: none;
  &:after {
    position: absolute;
    left: 100%;
  	content: '';
  	height: 2px;
    background: #ffffff;
    transition: all 0.5s ease-in;
    width: 0;
    bottom: -1px;
  }
  &:hover:after {
    width: 70%;
    left: 0;
  }

  @media (max-width: 1000px) {
    font-size: 1.2rem;
    display: none !important;
  }
`;

// export const ButtonsContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     margin-top: 1rem;
//     position: relative;
//
//     &>a:nth-of-type(2) {
//       margin: .5rem auto!important;
//     }
//     &>a:not(:nth-of-type(2)) {
//       margin: 0 auto;
//     }
//
//     span {
//       z-index: 100;
//       transition: all 0.2s ease-in-out;
//       &:before {
//         content: '';
//         position: absolute;
//         height: 5px;
//         width: 40%;
//         right: 0;
//         top: 0;
//         background: #303030;
//       }
//       &:after {
//         position: absolute;
//         content: '';
//         height: 5px;
//         background: #303030;
//         width: 40%;
//         top: 1rem;
//         right: 0;
//         transition: all 1s ease-in-out;
//       }
//
//       &:hover:after {
//         top: 7rem;
//       }
//     }
// `;
//
// export const Anchor = styled.a`
//   font-size: 1.5rem;
//   font-weight: 500;
//   color: #303030;
//   position: relative;
//   text-decoration: none;
//   transition: all 0.5s ease-in;
//   opacity: ${props => props.showMenuItem ? 1 : 0};
//
//   @media (max-width: 1000px) {
//     font-size: 1.2rem;
//   }
// `;
//
// export const ButtonLink = styled(ReactRouterLink)`
//   font-size: 1.5rem;
//   font-weight: 500;
//   color: #303030;
//   position: relative;
//   text-decoration: none;
//   transition: all 0.5s ease-in;
//   opacity: ${props => props.showMenuItem ? 1 : 0};
//
//   @media (max-width: 1000px) {
//     font-size: 1.2rem;
//   }
// `;
//
// export const MobileMenu = styled.div`
//   display: none;
//   background-image: require('../../_assets/img/waves-menu.svg');
//   @media (max-width: 1000px) {
//     display: block !important;
//   }
// `;
