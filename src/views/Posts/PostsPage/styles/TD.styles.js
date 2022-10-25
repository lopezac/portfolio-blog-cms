import styled from "styled-components";
import { theme } from "@components/globals";

const TD = styled.td`
  text-align: center;
  vertical-align: middle;
  padding: 8px;

  &:first-child {
    text-align: start;
    padding-left: 10px;
  }
`;

export default TD;
