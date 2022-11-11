import parse from "html-react-parser";
import { P } from "src/components/globals";

function PostText({ text }: { text: string }) {
  return <P>{parse(text)}</P>;
}

export default PostText;
