import { useState, useEffect } from "react";
import { useQuery, useSocket } from "src/hooks";
import { BlogApi } from "src/services";
import { PostObject } from "src/types/Post.types";
import PostsTable from "./PostsTable";
import PostsNavigation from "./PostsNavigation";

type ArrayPosts = Array<PostObject>;

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
      setPosts([...posts, post]);
    });
    socket.on("post:delete", (postId) => {
      setPosts(posts.filter((post) => post._id !== postId));
    });
    socket.on("post:update", (updatedPost) => {
      const newPosts = posts.filter((post) => post._id !== updatedPost._id);
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
