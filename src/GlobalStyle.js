import "modern-normalize";
import { createGlobalStyle } from "styled-components";
import { theme, FontStack, FlexCol } from "@components/globals";

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
