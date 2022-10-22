import { useState } from "react";
import { formatDateYMD } from "@utils/date";
import StyledDateInput from "./DateInput.style";

function DateInput(props) {
  const { value, ...rest } = props;

  const [inputValue, setInputValue] = useState(formatDateYMD(value));

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <StyledDateInput
      type="date"
      onChange={handleChange}
      value={inputValue}
      {...rest}
    />
  );
}

export default DateInput;
