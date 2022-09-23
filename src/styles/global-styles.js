import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  html {
    font-size: 65.5%;
    scroll-behavior: smooth;
    letter-spacing: 0.1rem;
  }
  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
  }
  a {
    text-decoration: none;
 }

  `

  ;