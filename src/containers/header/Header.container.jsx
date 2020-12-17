import React, {useState} from 'react';
import {Header} from '../../components';
import * as ROUTES from '../../constants/routes';
import logo from '../../_assets/img/tv.svg';

export default function HeaderContainer() {
  const [showMenuItem, setShowMenuItem] = useState(false);
  const toggleMenu = (e) => {
    e.preventDefault();
    setShowMenuItem(!showMenuItem);
  };
  return (
    <Header>
      <Header.Logo
        src={logo}
        alt={"Watch Wat logo"}
      />
      <Header.ButtonsContainer onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
        <Header.ButtonLink showMenuItem={showMenuItem} to={ROUTES.HOME}>Home</Header.ButtonLink>
        <Header.Anchor showMenuItem={showMenuItem} href={ROUTES.GITHUB} rel="noopener noreferrer">Github</Header.Anchor>
        <Header.ButtonLink showMenuItem={showMenuItem} to={ROUTES.ABOUT}>About</Header.ButtonLink>
      </Header.ButtonsContainer>
    </Header>
  );
};
