import StyledVioletBtn from "./VioletBtn.styles";
import StyledRedBtn from "./RedBtn.styles";
import StyledGreenBtn from "./GreenBtn.styles";
import { Link } from "@components/wrappers";

const handleLinkWrapping = (Component, props) => {
  const { to, children, ...rest } = props;
  const button = <Component {...rest}>{children}</Component>;

  if (to) return <Link to={to}>{button}</Link>;
  return button;
};

export const VioletBtn = (props) => {
  return handleLinkWrapping(StyledVioletBtn, props);
};

export const RedBtn = (props) => {
  return handleLinkWrapping(StyledRedBtn, props);
};

export const GreenBtn = (props) => {
  return handleLinkWrapping(StyledGreenBtn, props);
};
