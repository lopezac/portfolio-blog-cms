import StyledSecondaryBtn from "../SecondaryBtn.styles";
import styled from "styled-components";

const StyledFormBtn = styled(StyledSecondaryBtn)`
  padding: 10px 20px;

  :active,
  :hover {
    transform: scale(1.01);
  }
`;

export default StyledFormBtn;
