import { useState } from "react";
import { formatDateYMD } from "@utils/date";
import { Input } from "@components/globals";

function DateInput(props) {
  const { value, ...rest } = props;

  const [inputValue, setInputValue] = useState(formatDateYMD(value));

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <Input type="date" onChange={handleChange} value={inputValue} {...rest} />
  );
}

export default DateInput;
