import { FC, ReactNode } from "react";
import { Link } from "src/components/wrappers";
import StyledPrimaryBtn from "./styles/PrimaryBtn.styles";
import StyledSecondaryBtn from "./styles/SecondaryBtn.styles";
import StyledPrimaryFormBtn from "./styles/PrimaryFormBtn.styles";
import StyledSecondaryFormBtn from "./styles/SecondaryFormBtn.styles";
import ActionButtons from "./ActionButtons";

type Object = {
  children: ReactNode;
  [key: string]: any;
};

const handleLinkWrapping = (Component: FC<Object>, props: Object) => {
  const { to, children, ...rest } = props;
  const button = <Component {...rest}>{children}</Component>;

  if (to) return <Link to={to}>{button}</Link>;
  return button;
};

const PrimaryBtn = (props: Object) => {
  return handleLinkWrapping(StyledPrimaryBtn, props);
};

const SecondaryBtn = (props: Object) => {
  return handleLinkWrapping(StyledSecondaryBtn, props);
};

const PrimaryFormBtn = (props: Object) => {
  return handleLinkWrapping(StyledPrimaryFormBtn, props);
};

const SecondaryFormBtn = (props: Object) => {
  return handleLinkWrapping(StyledSecondaryFormBtn, props);
};

export {
  ActionButtons,
  PrimaryBtn,
  SecondaryBtn,
  PrimaryFormBtn,
  SecondaryFormBtn,
};
