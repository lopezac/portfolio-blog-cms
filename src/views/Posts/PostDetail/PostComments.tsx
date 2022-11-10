import { useEffect, useState } from "react";
import { Comments } from "src/views/Comments";
import { BlogApi } from "src/services";
import { H2, P } from "src/components/globals";
import { useSocket } from "src/hooks";
import { ArrayComments, CommentObject } from "src/types/Post.types";

function PostComments({ id }: { id: string }) {
  const blogApi = BlogApi();
  const [comments, setComments] = useState<ArrayComments>([]);
  const socket = useSocket();

  useEffect(() => {
    if (!socket) return;
    socket.on("comment:create", (newComment: CommentObject) => {
      setComments([...comments, newComment]);
    });
    socket.on("comment:delete", (commentId: string) => {
      setComments(comments.filter((comment) => comment._id !== commentId));
    });
  }, [socket, comments]);

  useEffect(() => {
    blogApi.getPostComments(id).then((data) => setComments(data));
  }, [id]);

  if (!comments.length) return <P>There are no comments.</P>
  return (
    <section>
      <H2>Comments</H2>
      <Comments comments={comments} />
    </section>
  );
}

export default PostComments;
