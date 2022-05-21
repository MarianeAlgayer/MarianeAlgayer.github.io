import React from 'react';

import RouteApp from './RouteApp';
import Header from './components/Header';
import SocialsMenu from './components/SocialsMenu';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouteApp />

      <Header />
      <SocialsMenu />
    </>
  );
}

export default App;
