import { string, bool } from "prop-types";
import { Link } from "@components/wrappers";
import { formatTitle } from "@utils/string";
import PublishButton from "./PublishButton";

function PostRow({ title, published, keyword, date, id }) {
  return (
    <tr>
      <td>
        <Link to={`/posts/${formatTitle(title)}`}>{title}</Link>
      </td>
      <td>{date}</td>
      <td>{keyword}</td>
      <td>{<PublishButton published={published} id={id} />}</td>
    </tr>
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
