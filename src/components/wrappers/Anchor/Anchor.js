import { node, string } from "prop-types";
import StyledAnchor from "./Anchor.styles";

function Anchor({ children, href = "#", ...rest }) {
  return (
    <StyledAnchor href={href} target="_blank" rel="noreferrer" {...rest}>
      {children}
    </StyledAnchor>
  );
}

// Anchor.propTypes = {
//   children: node,
//   rest: node,
//   href: string,
// };

export default Anchor;
