import styled from "styled-components";
import StyledSecondaryBtn from "./SecondaryBtn.styles";

const StyledSecondaryFormBtn = styled(StyledSecondaryBtn)`
  padding: 10px 20px;

  :active,
  :hover {
    transform: scale(1.02);
  }
`;

export default StyledSecondaryFormBtn;
