import { formatDate } from "src/utils/date";
import { RowList } from "src/components/lists";
import { P } from "src/components/globals";
import { ActionButtons } from "src/components/buttons";
import LightPrimaryCard from "./styles/LightPrimaryCard.styles";
import CommentHeader from "./styles/CommentHeader.styles";

type TComment = {
  username: string;
  text: string;
  date: Date | number;
  id: string;
};

function Comment({ username, text, date, id }: TComment) {
  return (
    <LightPrimaryCard>
      <CommentHeader>
        <RowList>
          <li>{username}</li>
          <li>{formatDate(date).toString()}</li>
        </RowList>
        <ActionButtons type="comments" commentId={id} />
      </CommentHeader>
      <P>{text}</P>
    </LightPrimaryCard>
  );
}

export default Comment;
