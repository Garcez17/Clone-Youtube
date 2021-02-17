import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    font-size: 62.5%;
  }
  @media (max-width: 1080px) {
    html {
      font-size: 58%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 54%;
    }
  }
  @media (max-width: 425px) {
    html {
      font-size: 50%;
    }
  }
  @media (max-width: 375px) {
    html {
      font-size: 46%;
    }
  }
  @media (max-width: 320px) {
    html {
      font-size: 42%;
    }
  }
  body {
    background: var(--color-back-background);
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3, h4, h5, h6 {
    cursor: default;
    font-weight: 600;
    color: var(--color-text-button);
  }
  p, strong, span {
    cursor: default;
    color: var(--color-text-button);
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Roboto', -apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
  }
  button {
    cursor: pointer;
    outline: none;
  }
  a {
    text-decoration: none;
  }
`;