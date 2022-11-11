import styled from "styled-components";
import { theme } from "src/components/globals";

const StyledAnchor = styled.a`
  color: ${theme.lighterSecondary};

  svg {
    color: white;
    font-size: 1.6rem;

    :hover,
    :active {
      color: ${theme.lighterSecondary};
    }
  }
`;

export default StyledAnchor;
