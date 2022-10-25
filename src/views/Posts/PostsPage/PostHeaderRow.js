import TH from "./styles/TH.styles";
import TR from "./styles/TR.styles";
import THead from "./styles/THead.styles";

export default function PostHeaderRow() {
  return (
    <THead>
      <TR>
        <TH>Title</TH>
        <TH>Date</TH>
        <TH>Keyword</TH>
        <TH>Published</TH>
      </TR>
    </THead>
  );
}
