import { ReactNode } from "react";
import StyledLink from "./Link.styles";

function Link({ children, to }: { children: ReactNode; to: string }) {
  return <StyledLink to={to}>{children}</StyledLink>;
}

export default Link;
