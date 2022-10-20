import { useEffect, useState } from "react";
import { string } from "prop-types";
import Comments from "./Comments";
import { BlogApi } from "@services";

function PostComments({ id }) {
  const blogApi = BlogApi();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getComments() {
      try {
        console.log("ida t postcomments", id);
        const data = await blogApi.getPostComments(id);
        setComments(data);
      } catch (err) {
        throw Error("Error getting comments at CMS", err, id);
      }
    }
    getComments();
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
