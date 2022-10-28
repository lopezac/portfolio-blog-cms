import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BlogApi } from "@services";
import { H1 } from "@components/globals";
import PostInfo from "./PostInfo";
import PostComments from "./PostComments";
import { useDocTitle } from "@hooks";

export default function PostDetail() {
  const [post, setPost] = useState({});
  const [docTitle, setDocTitle] = useDocTitle(null);
  const { postId } = useParams();
  const blogApi = BlogApi();

  useEffect(() => {
    blogApi.getPost(postId).then((data) => setPost(data));
  }, [postId]);

  useEffect(() => {
    setDocTitle(post.title);
  }, [post]);

  if (!post || !Object.keys(post).length) {
    return <H1>There is no post with that id or title</H1>;
  }
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
