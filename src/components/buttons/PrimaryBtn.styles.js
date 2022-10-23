import styled from "styled-components";
import theme from "@styles/theme";

const StyledPrimaryBtn = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px 8px;
  background-color: ${theme.lighterSecondary};
  color: ${theme.black};
  cursor: pointer;

  :hover,
  :active {
    background-color: ${theme.lightSecondary};
    color: black;
  }
`;

export default StyledPrimaryBtn;
