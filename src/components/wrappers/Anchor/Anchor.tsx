import { AnchorTypes } from "src/types/Anchor.types";
import StyledAnchor from "./Anchor.styles";

function Anchor({ children, href = "#", ...rest }: AnchorTypes) {
  return (
    <StyledAnchor href={href} target="_blank" rel="noreferrer" {...rest}>
      {children}
    </StyledAnchor>
  );
}

export default Anchor;
