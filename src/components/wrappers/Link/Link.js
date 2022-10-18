import { string, node } from "prop-types";
import StyledLink from "./Link.styles";

function Link({ children, to }) {
  return <StyledLink to={to}>{children}</StyledLink>;
}

Link.propTypes = {
  children: node,
  to: string,
};

export default Link;
