import { ReactNode, useState, ChangeEvent } from "react";
import { formatDateYMD } from "src/utils/date";
import { Input } from "src/components/globals";

type DateProps = {
  [key: string]: any | Date | number | ReactNode;
  value?: Date | number;
  rest?: ReactNode;
};

function DateInput(props: DateProps) {
  const { value, ...rest } = props;

  const [inputValue, setInputValue] = useState(formatDateYMD(value));

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    if (!target) return;
    setInputValue(target.value);
  }

  return (
    <Input type="date" onChange={handleChange} value={inputValue} {...rest} />
  );
}

export default DateInput;
