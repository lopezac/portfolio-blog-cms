import { string } from "prop-types";
import { formatDate } from "@utils/date";
import { GreenBtn } from "@components/buttons";
import DeleteBtn from "./DeleteBtn";
import { RowList } from "@components/lists";

function Comment({ username, text, date, id }) {
  return (
    <article>
      <RowList>
        <li>{username}</li>
        <li>{formatDate(date)}</li>
      </RowList>
      <GreenBtn>Update</GreenBtn>
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
