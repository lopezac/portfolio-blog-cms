import styled from "styled-components";
import theme from "./theme";

const Input = styled.input`
  background-color: ${theme.primary};
  color: ${theme.white};
  border-radius: 3px;
  border: 2px solid ${theme.darkerPrimary};
  padding: 10px;

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 60px ${theme.primary} inset !important;
    // background-color: transparent;
  }

  :focus {
    border: 2px solid ${theme.lightSecondary};
  }
`;

export default Input;
