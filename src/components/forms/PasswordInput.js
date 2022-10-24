import { Input } from "@components/globals";

function PasswordInput(props) {
  const { value, ...rest } = props;

  return <Input type="password" required {...rest} />;
}

export default PasswordInput;
