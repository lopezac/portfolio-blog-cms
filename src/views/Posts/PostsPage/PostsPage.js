import { useState, useEffect } from "react";
import { BlogApi } from "@services";
import PostsTable from "./PostsTable";
import PostsNavigation from "./PostsNavigation";
import { useQuery } from "@hooks";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const { page } = useQuery();
  const blogApi = BlogApi();

  useEffect(() => {
    blogApi
      .getPosts({ page })
      .then((data) => setPosts(data))
      .catch((error) => error);
  }, []);

  return (
    <>
      <PostsTable posts={posts} />
      <PostsNavigation />
    </>
  );
}
