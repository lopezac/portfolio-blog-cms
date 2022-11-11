import { FormEventHandler, ReactNode } from "react";
import StyledForm from "./Form.styles";

type FormTypes = {
  children: ReactNode;
  rest?: ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
};

function Form({ children, ...rest }: FormTypes) {
  return (
    <StyledForm method="GET" action="#" {...rest}>
      {children}
    </StyledForm>
  );
}

export default Form;
