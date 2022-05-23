import React, { useState } from 'react';

import { TiStarburst } from 'react-icons/ti';

import { Container } from './styles';

function TechnologiesSection() {
  const [technologies] = useState(['Git', 'HTML', 'CSS', 'JS ES6', 'TypeScript', 'ReactJS', 'RTL', 'NodeJS']);

  return (
    <Container>
      <p>
        Here are a few technologies I&apos;ve been working with recently:
      </p>

      <ul>
        { technologies.map((technologie) => (
          <li key={ technologie }>
            <TiStarburst />
            { technologie }
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default TechnologiesSection;
