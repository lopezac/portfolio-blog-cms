import { string, bool } from "prop-types";
import { Link } from "@components/wrappers";
import { formatTitle } from "@utils/string";
import { formatDate } from "@utils/date";
import TD from "./styles/TD.styles";
import TR from "./styles/TR.styles";
import PublishButton from "./PublishButton";

function PostRow({ title, published, keyword, date, id }) {
  return (
    <TR>
      <TD>
        <Link to={`/posts/${formatTitle(title)}`}>{title}</Link>
      </TD>
      <TD>{formatDate(date)}</TD>
      <TD>{keyword}</TD>
      <TD>{<PublishButton published={published} id={id} />}</TD>
    </TR>
  );
}

PostRow.propTypes = {
  title: string,
  keyword: string,
  date: string,
  published: bool,
  id: string,
};

export default PostRow;
