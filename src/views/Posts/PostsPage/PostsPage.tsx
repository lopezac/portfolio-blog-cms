import { useState, useEffect } from "react";
import { useQuery, useSocket } from "src/hooks";
import { BlogApi } from "src/services";
import { ArrayPosts } from "src/types/Post.types";
import PostsTable from "./PostsTable";
import PostsNavigation from "./PostsNavigation";

export default function PostsPage() {
  const [posts, setPosts] = useState<ArrayPosts>([]);
  const { page } = useQuery();
  const blogApi = BlogApi();
  const socket = useSocket();

  useEffect(() => {
    blogApi
      .getPosts({ page })
      .then((data) => setPosts(data))
      .catch((error) => error);
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("post:create", (post) => {
      if (!post) return;
      setPosts([...posts, post]);
    });

    socket.on("post:delete", (postId) => {
      setPosts(posts.filter((post) => post && post._id !== postId));
    });

    socket.on("post:update", (updatedPost) => {
      const newPosts = posts.filter(
        (post) => post && post._id !== updatedPost._id
      );
      newPosts.push(updatedPost);
      setPosts(newPosts);
    });
  }, [socket, posts]);

  return (
    <>
      <PostsTable posts={posts} />
      <PostsNavigation />
    </>
  );
}
