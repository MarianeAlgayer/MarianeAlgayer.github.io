import React, { useState } from 'react';

import RouteApp from './RouteApp';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import SocialsMenu from './components/SocialsMenu';

import { GlobalStyle } from './styles/global';

function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <GlobalStyle />
      <RouteApp />

      <Header
        setMenuIsVisible={ setMenuIsVisible }
      />

      <MobileMenu
        menuIsVisible={ menuIsVisible }
        setMenuIsVisible={ setMenuIsVisible }
      />

      <SocialsMenu />
    </>
  );
}

export default App;
