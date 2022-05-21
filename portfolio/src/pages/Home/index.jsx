import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import { Introduction, Projects } from './styles';

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
    <main>
      <Introduction>
        <h1>Hi, there! 👋 I&apos;m Mariane,</h1>

        <h2>
          a
          <span ref={ el } />
          based in Brazil.
        </h2>

        <p>
          I&apos;m currently a software development student at
          {' '}
          <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer">Trybe</a>
          {' '}
          taking the module about Back-End Development. I&apos;m focused on learning technologies related to JavaScript, as ReactJS and NodeJS, but this is just the beginning 🚀.
        </p>
      </Introduction>

      <Projects>
        <h3>PROJECTS</h3>
      </Projects>
    </main>
  );
}

export default Home;
