import styled from "styled-components";
import { theme } from "@components/globals";

const StyledPrimaryBtn = styled.button`
  border: none;
  border-radius: 5px;
  padding: 7px 10px;
  background-color: ${theme.lighterPrimary};
  color: ${theme.white};
  cursor: pointer;

  transition: transform 200ms ease-in-out;
  :hover,
  :active {
    background-color: ${theme.lightPrimary};
    color: white;
    transform: scale(1.1);
  }
`;

export default StyledPrimaryBtn;
