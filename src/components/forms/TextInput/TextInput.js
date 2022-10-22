import { useState } from "react";
import StyledTextInput from "./TextInput.style";

function TextInput(props) {
  const { value, ...rest } = props;
  const [inputValue, setInputValue] = useState(value);

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <StyledTextInput
      type="text"
      onChange={handleChange}
      value={inputValue}
      {...rest}
    />
  );
}

export default TextInput;
