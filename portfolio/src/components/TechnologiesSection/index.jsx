import React from 'react';

import { TiStarburst } from 'react-icons/ti';
import { TECHNOLOGIES } from '../../utils/constants';

import { Container } from './styles';

function TechnologiesSection() {
  return (
    <Container>
      <p>
        Here are a few technologies I&apos;ve been working with recently:
      </p>

      <ul>
        { TECHNOLOGIES.map((technologie) => (
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
