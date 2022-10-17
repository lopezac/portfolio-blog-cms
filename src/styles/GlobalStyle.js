import "modern-normalize";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    min-height: 100%;
  }

  body {
    height: 100%;
    width: 100%;
  }
  
  body > #root {
    height: 100vh;
    display: flex;
    flex-direction: column;

    main {
      flex: 1;
    }
  }
`;

export default GlobalStyle;
