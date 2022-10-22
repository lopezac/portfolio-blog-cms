import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BlogApi } from "@services";
import PostInfo from "./PostInfo";
import PostComments from "./PostComments";

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

  if (!post || !Object.keys(post).length)
    return <h1>There is no post with that id or title</h1>;
  return (
    <>
      <PostInfo
        title={post.title}
        date={post.timestamp}
        keyword={post.keyword}
        text={post.text}
      />
      <PostComments id={postId} />
    </>
  );
}
