import styled from "styled-components";
import { theme } from "@components/globals";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.darkPrimary};
  border-bottom: 1px solid ${theme.lightPrimary};
  padding: 10px 20px;
`;

export default StyledHeader;
