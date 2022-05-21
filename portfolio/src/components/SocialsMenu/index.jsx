import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { MdOutlineMail } from 'react-icons/md';

import { Container, StyledLink } from './styles';

function SocialsMenu() {
  return (
    <Container>
      <StyledLink
        href="https://github.com/MarianeAlgayer"
        target="_blank"
        rel="noreferrer"
      >
        <FiGithub />
      </StyledLink>

      <StyledLink
        href="https://www.linkedin.com/in/mariane-albuquerque-algayer"
        target="_blank"
        rel="noreferrer"
      >
        <FiLinkedin />
      </StyledLink>

      <StyledLink
        href="mailto:marianealgayer@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <MdOutlineMail />
      </StyledLink>
    </Container>
  );
}

export default SocialsMenu;
