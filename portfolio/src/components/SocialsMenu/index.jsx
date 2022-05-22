import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { MdOutlineMail } from 'react-icons/md';

import Anchor from '../Anchor';

import { Container } from './styles';

function SocialsMenu() {
  return (
    <Container>
      <Anchor
        href="https://github.com/MarianeAlgayer"
        text={ <FiGithub /> }
      />

      <Anchor
        href="https://www.linkedin.com/in/mariane-albuquerque-algayer"
        text={ <FiLinkedin /> }
      />

      <Anchor
        href="mailto:marianealgayer@gmail.com"
        text={ <MdOutlineMail /> }
      />
    </Container>
  );
}

export default SocialsMenu;
