import StyledFormBtn from "./FormBtn.styles";

function FormBtn({ children, ...rest }) {
  return (
    <StyledFormBtn type="submit" {...rest}>
      {children}
    </StyledFormBtn>
  );
}

export default FormBtn;
