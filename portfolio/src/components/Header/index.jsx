import React from 'react';
import PropTypes from 'prop-types';

import { IoMenu } from 'react-icons/io5';

import { Container, StyledLink } from './styles';

function Header({ setMenuIsVisible }) {
  return (
    <Container>
      <nav>
        <div className="menu-text">
          <StyledLink to="/">HOME</StyledLink>
          <StyledLink to="/about">ABOUT</StyledLink>
          <StyledLink to="/mariane-algayer-resume.pdf" target="_blank">RÉSUMÉ</StyledLink>
        </div>

        <IoMenu onClick={ () => setMenuIsVisible(true) } />
      </nav>
    </Container>
  );
}

Header.propTypes = {
  setMenuIsVisible: PropTypes.func,
}.isRequired;

export default Header;
