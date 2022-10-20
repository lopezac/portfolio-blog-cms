import getApiUrl from "./getApiUrl";
import getQuery from "./getQuery";
import getReqOptions from "./getReqOptions";
import { useAuth } from "@hooks";

export default function BlogApi() {
  const apiUrl = getApiUrl();
  const { user } = useAuth();

  async function getPosts({ filter, sort, page } = {}) {
    try {
      const query = getQuery(filter, sort, page);
      const url = `${apiUrl}/posts?${query}`;

      const res = await fetch(url, getReqOptions());
      const data = await res.json();

      return data;
    } catch (err) {
      throw Error("Error getting posts, at api", err);
    }
  }

  async function getPost(id) {
    try {
      const url = `${apiUrl}/posts/${id}`;

      const res = await fetch(url, getReqOptions());
      const data = await res.json();

      return data;
    } catch (err) {
      throw Error("Error getting post, at api", id, err);
    }
  }

  async function getPostComments(id) {
    try {
      const url = `${apiUrl}/posts/${id}/comments`;

      const res = await fetch(url, getReqOptions());
      const data = await res.json();

      return data;
    } catch (err) {
      throw Error("Error getting post comments at api", id, err);
    }
  }

  async function submitComment(username, text, post) {
    try {
      const url = `${apiUrl}/comments`;
      const options = {
        ...getReqOptions("POST"),
        body: JSON.stringify({ username, text, post }),
      };

      const res = await fetch(url, options);
      const data = await res.json();

      return data;
    } catch (err) {
      throw Error("Error submiting comment", err, username, text, post);
    }
  }

  async function signIn(username, password) {
    try {
      const url = `${apiUrl}/sign-in`;
      const options = {
        ...getReqOptions("POST"),
        body: JSON.stringify({ username, password }),
      };

      const res = await fetch(url, options);
      const data = await res.json();

      return data;
    } catch (err) {
      throw Error("Error sign in user at CMS", err, username, password);
    }
  }

  async function updatePost(id, params) {
    try {
      const url = `${apiUrl}/posts/${id}`;
      const options = {
        ...getReqOptions("PUT", user),
        body: JSON.stringify({ ...params }),
      };

      const res = await fetch(url, options);
      const data = await res.json();

      return data;
    } catch (err) {
      throw Error("Error updating post at CMS", err, id, ...params);
    }
  }

  async function deletePost(id, type = "posts") {
    try {
      const url = `${apiUrl}/${type}/${id}`;
      const options = { ...getReqOptions("DELETE", user) };

      const res = await fetch(url, options);
      const data = await res.json();

      return data;
    } catch (err) {
      throw Error("Error deleting at CMS API", err, id, type);
    }
  }

  return {
    getPosts,
    getPost,
    getPostComments,
    submitComment,
    signIn,
    updatePost,
    deletePost,
  };
}
