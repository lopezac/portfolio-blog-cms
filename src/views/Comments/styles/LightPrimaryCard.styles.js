import styled from "styled-components";
import { theme, FlexCol } from "@components/globals";

const LightPrimaryCard = styled.article`
  ${FlexCol}
  justify-content: center;
  background-color: ${theme.primary};
  border-radius: 7px;
  padding: 0 12px;

  p {
    margin: 4px 0 12px 0;
  }
`;

export default LightPrimaryCard;
