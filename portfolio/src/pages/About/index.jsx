import React from 'react';

import Anchor from '../../components/Anchor';
import TechnologiesSection from '../../components/TechnologiesSection';

import { Container } from './styles';

function About() {
  return (
    <Container>
      <h1>About Me</h1>

      <section>
        <h2>
          Hello! I&apos;m Mariane, a Software Development student based in Florianópolis - Brazil.
        </h2>

        <p>
          I have a degree in Architecture and Urban Planning from the
          {' '}
          <Anchor
            href="https://en.ufsc.br/"
            text="Federal University of Santa Catarina"
          />
          , with one year taken at the
          {' '}
          <Anchor
            href="https://www.westminster.ac.uk/"
            text="University of Westminster"
          />
          {' '}
          in London.
        </p>

        <p>
          During this journey, I&apos;ve realized how passionate I&apos;m about technology and the way it can make a positive impact on people&apos;s lives.
        </p>

        <p>
          After some years working as an architect, I&apos;ve now decided to make a carrer change to software development, starting with a one year course at
          {' '}
          <Anchor
            href="https://www.betrybe.com/"
            text="Trybe"
          />
          .
        </p>
      </section>

      <TechnologiesSection />
    </Container>
  );
}
export default About;
