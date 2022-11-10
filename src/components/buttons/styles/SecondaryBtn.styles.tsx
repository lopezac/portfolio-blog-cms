import styled from "styled-components";
import { theme } from "src/components/globals";
import StyledPrimaryBtn from "./PrimaryBtn.styles";

const StyledSecondaryBtn = styled(StyledPrimaryBtn)`
  background-color: ${theme.lighterSecondary};
  color: ${theme.black};

  :hover,
  :active {
    background-color: ${theme.lightSecondary};
    color: black;
  }
`;

export default StyledSecondaryBtn;
