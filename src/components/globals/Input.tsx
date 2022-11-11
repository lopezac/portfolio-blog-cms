import styled from "styled-components";
import theme from "./theme";

const Input = styled.input`
  background-color: ${theme.primary};
  color: ${theme.white};
  border-radius: 3px;
  border: 2px solid ${theme.darkerPrimary};
  padding: 10px;

  &:autofill,
  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    background: ${theme.primary};
    color: ${theme.white};
    transition: background 600000s 0s, color 600000s 0s !important;
  }
`;

export default Input;
