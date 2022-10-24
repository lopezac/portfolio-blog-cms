import { Input } from "@components/globals";

function TextInput(props) {
  const { value, ...rest } = props;

  return <Input type="text" defaultValue={value} {...rest} />;
}

export default TextInput;
