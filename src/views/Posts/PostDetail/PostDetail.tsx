import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BlogApi } from "src/services";
import { H1 } from "src/components/globals";
import { useDocTitle } from "src/hooks";
import { PostObject } from "src/types/Post.types";
import PostInfo from "./PostInfo";
import PostComments from "./PostComments";

export default function PostDetail() {
  const [post, setPost] = useState<PostObject>(null);
  const [docTitle, setDocTitle] = useDocTitle("Post");
  const { postId } = useParams();
  const blogApi = BlogApi();

  useEffect(() => {
    if (!postId) return;
    blogApi.getPost(postId).then((data) => setPost(data));
  }, [postId]);

  useEffect(() => {
    if (!post) return;
    setDocTitle(post.title);
  }, [post]);

  if (!post || !Object.keys(post).length || !postId) {
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
