import { AnchorTypes } from "src/types/Anchor.types";
import StyledNoColorAnchor from "./NoColorAnchor.styles";

function NoColorAnchor({ children, href = "#", ...rest }: AnchorTypes) {
  return (
    <StyledNoColorAnchor href={href} {...rest}>
      {children}
    </StyledNoColorAnchor>
  );
}

export default NoColorAnchor;
