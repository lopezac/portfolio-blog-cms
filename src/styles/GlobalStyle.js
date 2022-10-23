import "modern-normalize";
import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body > #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${theme.darkPrimary};
    color: ${theme.white};

    main {
      flex: 1;
    }
  }

  ::selection {
    background-color: ${theme.lighterPrimary};
  }

`;

export default GlobalStyle;
