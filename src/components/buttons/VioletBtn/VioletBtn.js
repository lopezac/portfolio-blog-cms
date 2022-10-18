import { node, string } from "prop-types";
import StyledVioletBtn from "./VioletBtn.styles";

function VioletBtn({ children, type }) {
  return <StyledVioletBtn type={type}>{children}</StyledVioletBtn>;
}

VioletBtn.propTypes = {
  children: node,
  type: string,
};

export default VioletBtn;
