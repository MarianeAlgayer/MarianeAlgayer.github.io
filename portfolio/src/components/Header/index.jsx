import React from 'react';
import { Container, StyledLink } from './styles';

function Header() {
  return (
    <Container>
      <StyledLink to="/">HOME</StyledLink>
      <StyledLink to="/about">ABOUT</StyledLink>
      <StyledLink to="/mariane-algayer-resume.pdf" target="_blank">RÉSUMÉ</StyledLink>
    </Container>
  );
}

export default Header;
