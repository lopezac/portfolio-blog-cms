import { string } from "prop-types";
import { formatDate } from "@utils/date";
import DeleteBtn from "@views/Posts/PostDetail/DeleteBtn";
import UpdateBtn from "@views/Posts/PostDetail/UpdateBtn";
import { RowList } from "@components/lists";

function Comment({ username, text, date, id }) {
  return (
    <article>
      <RowList>
        <li>{username}</li>
        <li>{formatDate(date)}</li>
      </RowList>
      <UpdateBtn type="comments" commentId={id}>
        Update
      </UpdateBtn>
      <DeleteBtn type="comments" commentId={id}>
        Delete
      </DeleteBtn>
      <p>{text}</p>
    </article>
  );
}

Comment.propTypes = {
  username: string,
  text: string,
  date: string,
  id: string,
};

export default Comment;
