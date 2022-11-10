import { Link } from "src/components/wrappers";
import { formatTitle } from "src/utils/string";
import { formatDate } from "src/utils/date";
import TD from "./styles/TD.styles";
import TR from "./styles/TR.styles";
import PublishButton from "./PublishButton";

type TPostRow = {
  title: string;
  published: boolean;
  keyword: string;
  date: Date | number;
  id: string;
};

function PostRow({ title, published, keyword, date, id }: TPostRow) {
  return (
    <TR>
      <TD>
        <Link to={`/posts/${formatTitle(title)}`}>{title}</Link>
      </TD>
      <TD>{formatDate(date).toString()}</TD>
      <TD>{keyword}</TD>
      <TD>{<PublishButton published={published} id={id} />}</TD>
    </TR>
  );
}

export default PostRow;
