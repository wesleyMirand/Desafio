import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: black; /* Fundo preto */
    color: white; /* Cor do texto branca */
  }
`;

export default GlobalStyle;