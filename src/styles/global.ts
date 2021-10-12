import { createGlobalStyle } from 'styled-components';

import BgDesktop from '../assets/bg-header-desktop.svg';
import BgMobile from '../assets/bg-header-mobile.svg';

export default createGlobalStyle`
  :root {
    --Primary-Background-color: hsl(180, 52%, 96%);
    --Secondary-Background-color: hsl(180, 31%, 95%);
    --Tertiary-Background-color: hsl(250, 100%, 100%);

    --Primary-color: hsl(180, 29%, 50%);
    --Secondary-color: hsl(180, 8%, 52%);
    --Tertiary-color: hsl(180, 14%, 20%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 93.8%;
  }

  body {
    background-image: url(${BgMobile});
    background-color: var(--Primary-color);
    background-size: 100vw 28vh;
    background-repeat: no-repeat;

    @media (min-width: 426px) {
      background-image: url(${BgDesktop});
    }
  }

  body, input, button, textarea {
    font-family: 'Spartan', sans-serif;
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;