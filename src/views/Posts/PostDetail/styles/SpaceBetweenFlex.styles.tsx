import styled from "styled-components";
import { FlexRow } from "src/components/globals";

const SpaceBetweenFlex = styled.div`
  ${FlexRow}
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 5px 0;

  div {
    ${FlexRow}
    gap: 10px;
  }
`;

export default SpaceBetweenFlex;
