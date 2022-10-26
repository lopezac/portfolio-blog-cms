import { string } from "prop-types";
import { formatDate } from "@utils/date";
import { RowList } from "@components/lists";
import { P } from "@components/globals";
import { ActionButtons } from "@components/buttons";
import LightPrimaryCard from "./styles/LightPrimaryCard.styles";
import CommentHeader from "./styles/CommentHeader.styles";

function Comment({ username, text, date, id }) {
  return (
    <LightPrimaryCard>
      <CommentHeader>
        <RowList>
          <li>{username}</li>
          <li>{formatDate(date)}</li>
        </RowList>
        <ActionButtons type="comments" commentId={id} />
      </CommentHeader>
      <P>{text}</P>
    </LightPrimaryCard>
  );
}

Comment.propTypes = {
  username: string,
  text: string,
  date: string,
  id: string,
};

export default Comment;
