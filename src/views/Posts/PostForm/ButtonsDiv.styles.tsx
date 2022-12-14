import styled from "styled-components";
import { FlexRow } from "src/components/globals";

const ButtonsDiv = styled.div`
  ${FlexRow}
  gap: 5px;

  * {
    flex: 1;
  }
`;

export default ButtonsDiv;
