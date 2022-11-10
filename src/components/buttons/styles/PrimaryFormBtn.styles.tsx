import StyledPrimaryBtn from "./PrimaryBtn.styles";
import styled from "styled-components";

const StyledPrimaryFormBtn = styled(StyledPrimaryBtn)`
  padding: 10px 20px;

  :active,
  :hover {
    transform: scale(1.02);
  }
`;

export default StyledPrimaryFormBtn;
