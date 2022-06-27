import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --bud-green: rgb(0 212 110);
    --castleton-green: rgb(0 74 39);
    --ghost-white: rgba(244, 244, 249, 1);
    --mikado-yellow: rgba(255, 200, 0, 1);
    --princeton-orange: rgba(255, 132, 39, 1);
  }
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
  }
  main {
    background-color: var(--castleton-green);
    color: var(--ghost-white);
    height: 100%;
    padding: 20px 15%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 769px) {
      padding: 20px 10px;
    }
   }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  #root {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
`;

export default GlobalStyle;
