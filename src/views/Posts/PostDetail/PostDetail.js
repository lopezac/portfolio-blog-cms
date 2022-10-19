import { useParams, useState, useEffect } from "react";
import BlogApi from "@services";

export default function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  const blogApi = BlogApi();

  useEffect(() => {
    async function getPost() {
      try {
        const data = await blogApi.getPost(postId);
        setPost(data);
      } catch (err) {
        throw Error("Error getting post at CMS", err);
      }
    }
    getPost();
  }, [postId]);

  return (
    <>
      <h1>{post.title}</h1>
    </>
  );
}
