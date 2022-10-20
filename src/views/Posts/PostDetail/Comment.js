import { string } from "prop-types";
import { formatDate } from "@utils/date";
import { RowList } from "@components/lists";

function Comment({ username, text, date }) {
  return (
    <article>
      <RowList>
        <li>{username}</li>
        <li>{formatDate(date)}</li>
      </RowList>
      <p>{text}</p>
    </article>
  );
}

Comment.propTypes = {
  username: string,
  text: string,
  date: string,
};

export default Comment;
