import { string } from "prop-types";
import parse from "html-react-parser";
import { P } from "@components/globals";

function PostText({ text }) {
  return <P>{parse(text)}</P>;
}

PostText.propTypes = {
  text: string,
};

export default PostText;
