import { useState, useEffect } from "react";
import PostsTable from "./PostsTable";
import { BlogApi } from "@services";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const blogApi = BlogApi();

  useEffect(() => {
    async function getPosts() {
      try {
        const data = await blogApi.getPosts();
        setPosts(data);
      } catch (err) {
        throw Error("Error getting posts at CMS", err, posts);
      }
    }
    getPosts();
  }, []);

  return <PostsTable posts={posts} />;
}
