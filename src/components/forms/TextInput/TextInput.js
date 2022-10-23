import StyledTextInput from "./TextInput.style";

function TextInput(props) {
  const { value, ...rest } = props;

  return <StyledTextInput type="text" defaultValue={value} {...rest} />;
}

export default TextInput;
