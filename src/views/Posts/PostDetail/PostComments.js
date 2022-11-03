import { useEffect, useState } from "react";
import { string } from "prop-types";
import { Comments } from "@views/Comments";
import { BlogApi } from "@services";
import { H2 } from "@components/globals";
import { useSocket } from "@hooks";

function PostComments({ id }) {
  const blogApi = BlogApi();
  const [comments, setComments] = useState([]);
  const socket = useSocket();

  useEffect(() => {
    socket.on("comment:create", (newComment) => {
      setComments([...comments, newComment]);
    });
    socket.on("comment:delete", (commentId) => {
      setComments(comments.filter((comment) => comment._id !== commentId));
    });
  }, [socket, comments]);

  useEffect(() => {
    blogApi.getPostComments(id).then((data) => setComments(data));
  }, [id]);

  return (
    <section>
      <H2>Comments</H2>
      <Comments comments={comments} />
    </section>
  );
}

PostComments.propTypes = {
  id: string,
};

export default PostComments;
