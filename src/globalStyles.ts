import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    background: #4B69FD;
    border: 2px solid black;
    font-family: 'Poppins', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  } 
`;