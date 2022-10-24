import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "@components/globals";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 1.1rem;

  :hover,
  :active {
    color: ${theme.lighterSecondary};
  }
`;

export default StyledLink;
