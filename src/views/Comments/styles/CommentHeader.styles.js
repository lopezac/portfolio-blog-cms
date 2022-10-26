import styled from "styled-components";
import { FlexRow } from "@components/globals";

const SpaceBetweenFlex = styled.div`
  ${FlexRow}
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;

  div {
    ${FlexRow}
    gap: 10px;
  }
`;

export default SpaceBetweenFlex;
