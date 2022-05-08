import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #0000B5;
    --green: #C1ECA8;
    --pink: #DCB1EF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size 16px (Desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
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
`