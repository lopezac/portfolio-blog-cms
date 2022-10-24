import StyledPrimaryBtn from "./PrimaryBtn.styles";
import StyledSecondaryBtn from "./SecondaryBtn.styles";
import FormBtn from "./FormBtn/FormBtn";
import { Link } from "@components/wrappers";

const handleLinkWrapping = (Component, props) => {
  const { to, children, ...rest } = props;
  const button = <Component {...rest}>{children}</Component>;

  if (to) return <Link to={to}>{button}</Link>;
  return button;
};

const PrimaryBtn = (props) => {
  return handleLinkWrapping(StyledPrimaryBtn, props);
};

const SecondaryBtn = (props) => {
  return handleLinkWrapping(StyledSecondaryBtn, props);
};

export { FormBtn, PrimaryBtn, SecondaryBtn };
