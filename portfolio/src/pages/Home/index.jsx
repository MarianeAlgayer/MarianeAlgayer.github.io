import React from 'react';

import IntroductionSection from '../../components/IntroductionSection';
import ContactSection from '../../components/ContactSection';

import { Projects } from './styles';

function Home() {
  return (
    <main id="top">
      <IntroductionSection />

      <Projects>
        <h3>Projects</h3>
      </Projects>

      <ContactSection />
    </main>
  );
}

export default Home;
