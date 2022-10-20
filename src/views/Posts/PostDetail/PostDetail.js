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
