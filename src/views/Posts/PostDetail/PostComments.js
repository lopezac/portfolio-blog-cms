import { useEffect, useState } from "react";
import { string } from "prop-types";
import { Comments } from "@views/Comments";
import { BlogApi } from "@services";

function PostComments({ id }) {
  const blogApi = BlogApi();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    blogApi.getPostComments(id).then((data) => setComments(data));
  }, [id]);

  return (
    <section>
      <h2>Comments</h2>
      <Comments comments={comments} />
    </section>
  );
}

PostComments.propTypes = {
  id: string,
};

export default PostComments;
