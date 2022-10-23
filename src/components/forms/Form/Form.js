import { node } from "prop-types";
import StyledForm from "./Form.styles";

function Form({ children, ...rest }) {
  return (
    <StyledForm method="GET" action="#" {...rest}>
      {children}
    </StyledForm>
  );
}

Form.propTypes = {
  children: node,
};

export default Form;
