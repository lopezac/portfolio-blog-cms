import styled from "styled-components";
import { theme } from "src/components/globals";

const StyledNoColorAnchor = styled.a`
  color: ${theme.lightPrimary};
  text-decoration: none;

  :hover {
    color: ${theme.white};
  }
`;

export default StyledNoColorAnchor;
