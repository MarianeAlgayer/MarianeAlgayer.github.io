import React from 'react';
import PropTypes from 'prop-types';

import { IoClose } from 'react-icons/io5';

import { Container, StyledLink } from './styles';

function MobileMenu({ menuIsVisible, setMenuIsVisible }) {
  return (
    <Container isVisible={ menuIsVisible }>
      <IoClose onClick={ () => setMenuIsVisible(false) } />

      <nav>
        <div className="menu-text">
          <StyledLink
            to="/"
            onClick={ () => setMenuIsVisible(false) }
          >
            HOME
          </StyledLink>

          <StyledLink
            to="/about"
            onClick={ () => setMenuIsVisible(false) }
          >
            ABOUT
          </StyledLink>

          <StyledLink to="/mariane-algayer-resume.pdf" target="_blank">RÉSUMÉ</StyledLink>
        </div>
      </nav>
    </Container>
  );
}

MobileMenu.propTypes = {
  menuIsVisible: PropTypes.bool,
  setMenuIsVisible: PropTypes.func,
}.isRequired;

export default MobileMenu;
