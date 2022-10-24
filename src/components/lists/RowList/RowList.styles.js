import styled from "styled-components";
import { FlexRow } from "@components/globals";

export const StyledRowList = styled.ul`
  ${FlexRow}
  gap: 20px;
  padding: 0;

  li:first-child {
    list-style-type: none;
  }
`;
