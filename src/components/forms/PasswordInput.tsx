import { Input } from "src/components/globals";
import { Props } from "src/types/Input.types";

function PasswordInput(props: Props) {
  const { value, ...rest } = props;

  return <Input type="password" required {...rest} />;
}

export default PasswordInput;
