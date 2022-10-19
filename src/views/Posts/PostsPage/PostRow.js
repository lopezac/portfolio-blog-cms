import { string, bool } from "prop-types";
import { Link } from "@components/wrappers";

function PostRow({ title, published, keyword, date }) {
  console.log("published", published);
  return (
    <tr>
      <Link to={`/posts/${title}`}>
        <td>{title}</td>
        <td>{date}</td>
        <td>{keyword}</td>
        <td>{published.toString()}</td>
      </Link>
    </tr>
  );
}

PostRow.propTypes = {
  title: string,
  keyword: string,
  date: string,
  published: bool,
};

export default PostRow;
