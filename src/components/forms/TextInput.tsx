import { Input } from "src/components/globals";
import { Props } from "src/types/Input.types";

function TextInput(props: Props) {
  const { value, ...rest } = props;

  return <Input type="text" defaultValue={value} {...rest} />;
}

export default TextInput;
