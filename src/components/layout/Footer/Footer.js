import { BsGithub } from "react-icons/bs";
import { P } from "@components/globals";
import { Anchor } from "@components/wrappers";
import RowGapAlign from "./RowGapAlign.styles";
import StyledFooter from "./Footer.styles";

export default function Footer() {
  return (
    <StyledFooter>
      <RowGapAlign>
        <P>Axel C. Lopez @Copyright 2022</P>
        <Anchor href="https://www.github.com/lopezac">
          <BsGithub />
        </Anchor>
      </RowGapAlign>
    </StyledFooter>
  );
}
