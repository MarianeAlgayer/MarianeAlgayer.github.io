import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: rgba(0, 0, 181);
    --green: rgba(193, 236, 168);
    --pink: rgba(220, 177, 239);
    --medium-pink: rgba(237, 216, 247);
    --light-pink: rgba(252, 247, 253);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size 16px (Desktop)
  html {
    scroll-behavior: smooth;
    
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }

    @media (max-width: 600px) {
      font-size: 81.25%; // 13px
    }
  }

  body {
    color: var(--blue);
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    --webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;
