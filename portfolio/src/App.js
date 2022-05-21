import React from 'react';

import RouteApp from './RouteApp';
import Header from './components/Header';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <RouteApp />
    </>
  );
}

export default App;
