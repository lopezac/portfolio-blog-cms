import StyledPrimaryBtn from "./PrimaryBtn.styles";
import StyledSecondaryBtn from "./SecondaryBtn.styles";
import StyledPrimaryFormBtn from "./PrimaryFormBtn.styles";
import StyledSecondaryFormBtn from "./SecondaryFormBtn.styles";
import ActionButtons from "./ActionButtons";
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

const PrimaryFormBtn = (props) => {
  return handleLinkWrapping(StyledPrimaryFormBtn, props);
};

const SecondaryFormBtn = (props) => {
  return handleLinkWrapping(StyledSecondaryFormBtn, props);
};

export {
  ActionButtons,
  PrimaryBtn,
  SecondaryBtn,
  PrimaryFormBtn,
  SecondaryFormBtn,
};
