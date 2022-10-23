import StyledPrimaryBtn from "./PrimaryBtn.styles";
import StyledSecondaryBtn from "./SecondaryBtn.styles";
import { Link } from "@components/wrappers";

const handleLinkWrapping = (Component, props) => {
  const { to, children, ...rest } = props;
  const button = <Component {...rest}>{children}</Component>;

  if (to) return <Link to={to}>{button}</Link>;
  return button;
};

export const PrimaryBtn = (props) => {
  return handleLinkWrapping(StyledPrimaryBtn, props);
};

export const SecondaryBtn = (props) => {
  return handleLinkWrapping(StyledSecondaryBtn, props);
};
