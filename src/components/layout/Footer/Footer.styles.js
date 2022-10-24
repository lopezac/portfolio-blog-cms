import styled from "styled-components";
import { theme, FlexRow } from "@components/globals";

const StyledFooter = styled.footer`
  ${FlexRow}
  justify-content: center;
  align-items: center;
  background-color: ${theme.darkPrimary};
  border-top: 1px solid ${theme.lightPrimary};
`;

export default StyledFooter;
