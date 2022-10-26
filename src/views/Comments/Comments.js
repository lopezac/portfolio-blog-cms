import { array } from "prop-types";
import { P } from "@components/globals";
import Comment from "./Comment";
import CommentsDiv from "./styles/CommentsDiv.styles";

function Comments({ comments }) {
  if (!comments.length) return <P>No comments.</P>;
  return (
    <CommentsDiv>
      {comments.map((comment) => {
        return (
          <Comment
            key={comment._id}
            id={comment._id}
            username={comment.username}
            text={comment.text}
            date={comment.timestamp}
          />
        );
      })}
    </CommentsDiv>
  );
}

Comments.propTypes = {
  comments: array,
};

export default Comments;
