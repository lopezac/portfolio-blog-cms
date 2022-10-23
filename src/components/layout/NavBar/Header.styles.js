import styled from "styled-components";
import theme from "@styles/theme";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.primary};
  padding: 10px;
`;

export default StyledHeader;
