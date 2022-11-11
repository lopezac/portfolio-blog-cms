import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import { theme, FontStack, FlexCol } from "src/components/globals";
import "./prism.css";

const GlobalStyle = createGlobalStyle`
  body > #root {
    ${FontStack}
    ${FlexCol}
    height: 100vh;
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
