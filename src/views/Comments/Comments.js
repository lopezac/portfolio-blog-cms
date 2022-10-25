import { array } from "prop-types";
import Comment from "./Comment";

function Comments({ comments }) {
  return comments.map((comment) => {
    return (
      <Comment
        key={comment._id}
        id={comment._id}
        username={comment.username}
        text={comment.text}
        date={comment.timestamp}
      />
    );
  });
}

Comments.propTypes = {
  comments: array,
};

export default Comments;
