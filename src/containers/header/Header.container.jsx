import React from 'react';
import {Header} from '../../components';
import * as ROUTES from '../../constants/routes';
import logo from '../../_assets/img/tv.svg';

export default function HeaderContainer() {
  return (
    <Header>
      <Header.Logo
        src={logo}
        alt={"Watch Wat logo"}
      />
      <Header.ButtonsContainer>
        <Header.ButtonLink to={ROUTES.HOME}>Home</Header.ButtonLink>
        <Header.Anchor href={ROUTES.GITHUB} rel="noopener noreferrer">Github</Header.Anchor>
        <Header.ButtonLink to={ROUTES.ABOUT}>About</Header.ButtonLink>
      </Header.ButtonsContainer>
    </Header>
  );
};
