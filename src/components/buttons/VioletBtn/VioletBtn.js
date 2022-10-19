import { node, string } from "prop-types";
import StyledVioletBtn from "./VioletBtn.styles";

function VioletBtn({ children, type, ...props }) {
  return (
    <StyledVioletBtn type={type} {...props}>
      {children}
    </StyledVioletBtn>
  );
}

VioletBtn.propTypes = {
  children: node,
  type: string,
};

export default VioletBtn;
