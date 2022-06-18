import React from 'react';

import IntroductionSection from '../../components/IntroductionSection';
import ContactSection from '../../components/ContactSection';
import ProjectsSection from '../../components/ProjectsSection';

function Home() {
  return (
    <main id="top">
      <IntroductionSection />

      <ProjectsSection />

      <ContactSection />
    </main>
  );
}

export default Home;
