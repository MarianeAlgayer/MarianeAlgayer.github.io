import React from 'react';

import { BsChatQuote } from 'react-icons/bs';

import Anchor from '../Anchor';
import ToTopBtn from '../ToTopBtn';

import { Container } from './styles';

function ContactSection() {
  return (
    <Container>
      <h3>
        Drop me a line!
        {' '}
        <BsChatQuote />
      </h3>

      <p>I&apos;m always excited to talk about new opportunities and ideas.</p>

      <h4>
        E-mail:
        {' '}
        <Anchor
          href="mailto:marianealgayer@gmail.com"
          text="marianealgayer@gmail.com"
        />
      </h4>

      <h4>
        LinkedIn:
        {' '}
        <Anchor
          href="https://www.linkedin.com/in/mariane-albuquerque-algayer"
          text="in/mariane-albuquerque-algayer"
        />
      </h4>

      <ToTopBtn />
    </Container>
  );
}

export default ContactSection;
