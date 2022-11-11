import { ArrayComments } from "src/types/Comment.types";
import CommentsDiv from "./styles/CommentsDiv.styles";
import Comment from "./Comment";

function Comments({ comments }: { comments: ArrayComments }) {
  return (
    <CommentsDiv>
      {comments.map((comment) => {
        return (
          comment && (
            <Comment
              key={comment._id}
              id={comment._id}
              username={comment.username}
              text={comment.text}
              date={comment.timestamp}
            />
          )
        );
      })}
    </CommentsDiv>
  );
}

export default Comments;
