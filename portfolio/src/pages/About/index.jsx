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
          I&apos;ve always been passionate about technology, and my interest in programming grew from some studies of parametric design. I was fascinated by the area and decided to make a career change to Software Development.
        </p>

        <p>
          I&apos;m currently a student at
          {' '}
          <Anchor
            href="https://www.betrybe.com/"
            text="Trybe"
          />
          {' '}
          taking the module about Back-end. I&apos;ve already completed the modules about the Fundamentals of Web Development and Front-end, where I was able to apply what I&apos;ve learned in a practical way.
        </p>
      </section>

      <TechnologiesSection />
    </Container>
  );
}
export default About;
