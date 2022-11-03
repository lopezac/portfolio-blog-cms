import { useState, useEffect } from "react";
import { useQuery, useSocket } from "@hooks";
import { BlogApi } from "@services";
import PostsTable from "./PostsTable";
import PostsNavigation from "./PostsNavigation";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
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
