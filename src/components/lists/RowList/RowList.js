import { node } from "prop-types";
import { StyledRowList } from "./RowList.styles";

function RowList({ children }) {
  return <StyledRowList>{children}</StyledRowList>;
}

RowList.propTypes = {
  children: node,
};

export default RowList;
