import { node, string } from "prop-types";
import StyledNoColorAnchor from "./NoColorAnchor.styles";

function NoColorAnchor({ children, href = "#", ...rest }) {
  return (
    <StyledNoColorAnchor href={href} {...rest}>
      {children}
    </StyledNoColorAnchor>
  );
}

NoColorAnchor.propTypes = {
  children: node,
  rest: node,
  href: string,
};

export default NoColorAnchor;
