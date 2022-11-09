import { getApiUrl } from "src/utils/various";
import getQuery from "./getQuery";
import getReqOptions from "./getReqOptions";
import { useAuth } from "src/hooks";

export default function BlogApi() {
  const apiUrl = getApiUrl();
  const { user } = useAuth();

  // Post
  async function getPost(id: string) {
    try {
      const url = `${apiUrl}/posts/${id}`;
      const res = await fetch(url, getReqOptions());

      return await res.json();
    } catch (err) {
      throw Error("Error getting post, at api", err as ErrorOptions);
    }
  }

  async function createPost(
    title: string,
    keyword: string,
    text: string,
    imageUrl: string
  ) {
    try {
      const url = `${apiUrl}/posts`;
      const options = {
        ...getReqOptions("POST", user),
        body: JSON.stringify({ title, keyword, text, imageUrl }),
      };

      const res = await fetch(url, options);

      return await res.json();
    } catch (err) {
      throw Error("Error creating post at API CMS", err as ErrorOptions);
    }
  }

  async function updatePost(id: string, params: object) {
    try {
      const url = `${apiUrl}/posts/${id}`;
      const options = {
        ...getReqOptions("PUT", user),
        body: JSON.stringify({ ...params }),
      };

      const res = await fetch(url, options);

      return await res.json();
    } catch (err) {
      throw Error("Error updating post at CMS", err as ErrorOptions);
    }
  }

  async function deletePost(id: string, type = "posts") {
    try {
      const url = `${apiUrl}/${type}/${id}`;
      const options = { ...getReqOptions("DELETE", user) };

      const res = await fetch(url, options);

      return await res.json();
    } catch (err) {
      throw Error("Error deleting at CMS API", err as ErrorOptions);
    }
  }

  // Posts
  type postsParams = { filter?: string; sort?: string; page?: number };
  async function getPosts({ filter, sort, page }: postsParams) {
    try {
      const query = getQuery(filter, sort, page);
      const url = `${apiUrl}/posts?${query}`;

      const res = await fetch(url, getReqOptions());

      return await res.json();
    } catch (err) {
      throw Error("Error getting posts, at api", err as ErrorOptions);
    }
  }

  async function getPostComments(id: string) {
    try {
      const url = `${apiUrl}/posts/${id}/comments`;

      const res = await fetch(url, getReqOptions());

      return await res.json();
    } catch (err) {
      throw Error("Error getting post comments at api", err as ErrorOptions);
    }
  }

  // Comment
  async function getComment(id: string) {
    try {
      const url = `${apiUrl}/comments/${id}`;

      const res = await fetch(url, getReqOptions());

      return await res.json();
    } catch (err) {
      throw Error("Error getting comment at API CMS", err as ErrorOptions);
    }
  }

  async function submitComment(username: string, text: string, post: string) {
    try {
      const url = `${apiUrl}/comments`;
      const options = {
        ...getReqOptions("POST"),
        body: JSON.stringify({ username, text, post }),
      };

      const res = await fetch(url, options);

      return await res.json();
    } catch (err) {
      throw Error("Error submiting comment", err as ErrorOptions);
    }
  }

  async function updateComment(id: string, params: object) {
    try {
      const url = `${apiUrl}/comments/${id}`;
      const options = {
        ...getReqOptions("PUT", user),
        body: JSON.stringify({ ...params }),
      };

      const res = await fetch(url, options);

      return await res.json();
    } catch (err) {
      throw Error("Error updating comment at API CMS", err as ErrorOptions);
    }
  }

  // Auth
  async function signIn(username: string, password: string) {
    try {
      const url = `${apiUrl}/sign-in`;
      const options = {
        ...getReqOptions("POST"),
        body: JSON.stringify({ username, password }),
      };

      const res = await fetch(url, options);
      return await res.json();
    } catch (err) {
      throw Error("Error sign in user at CMS", err as ErrorOptions);
    }
  }

  return {
    getPost,
    createPost,
    updatePost,
    deletePost,
    getPosts,
    getPostComments,
    getComment,
    updateComment,
    submitComment,
    signIn,
  };
}
