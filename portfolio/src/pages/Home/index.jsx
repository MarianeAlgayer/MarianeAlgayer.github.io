import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import { MdOutlineWavingHand } from 'react-icons/md';

import Anchor from '../../components/Anchor';
import ContactSection from '../../components/ContactSection';

import {
  Introduction,
  Projects,
} from './styles';

function Home() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'software developer',
        'former architect',
        'dog person',
      ],
      startDelay: 300,
      typeSpeed: 150,
      backDelay: 150,
      backSpeed: 100,
      loop: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <main id="top">
      <Introduction>
        <h1>
          Hi, there!
          <MdOutlineWavingHand />
          I&apos;m Mariane,
        </h1>

        <h2>
          a
          <span ref={ el } />
          based in Brazil.
        </h2>

        <p>
          I&apos;m currently a software development student at
          {' '}
          <Anchor
            href="https://www.betrybe.com/"
            text="Trybe"
          />
          {' '}
          taking the module about Back-End. I&apos;m focused on learning technologies related to
          {' '}
          <span>JavaScript,</span>
          {' '}
          as
          {' '}
          <span>ReactJS</span>
          {' '}
          and
          {' '}
          <span>NodeJS,</span>
          {' '}
          but this is just the beginning!
        </p>
      </Introduction>

      <Projects>
        <h3>Projects</h3>
      </Projects>

      <ContactSection />
    </main>
  );
}

export default Home;
