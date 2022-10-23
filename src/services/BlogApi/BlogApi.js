import getApiUrl from "./getApiUrl";
import getQuery from "./getQuery";
import getReqOptions from "./getReqOptions";
import { useAuth } from "@hooks";
import { isJSON } from "@utils/string";

export default function BlogApi() {
  const apiUrl = getApiUrl();
  const { user } = useAuth();

  // Post
  async function getPost(id) {
    try {
      const url = `${apiUrl}/posts/${id}`;
      const res = await fetch(url, getReqOptions());

      return await res.json();
    } catch (err) {
      throw Error("Error getting post, at api", id, err);
    }
  }

  async function createPost(title, keyword, text, imageUrl) {
    try {
      const url = `${apiUrl}/posts`;
      const options = {
        ...getReqOptions("POST", user),
        body: JSON.stringify({ title, keyword, text, imageUrl }),
      };

      const res = await fetch(url, options);

      return await res.json();
    } catch (err) {
      throw Error("Error creating post at API CMS", err);
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

      return await res.json();
    } catch (err) {
      throw Error("Error updating post at CMS", err, id, ...params);
    }
  }

  async function deletePost(id, type = "posts") {
    try {
      const url = `${apiUrl}/${type}/${id}`;
      const options = { ...getReqOptions("DELETE", user) };

      const res = await fetch(url, options);

      return await res.json();
    } catch (err) {
      throw Error("Error deleting at CMS API", err, id, type);
    }
  }

  // Posts
  async function getPosts({ filter, sort, page } = {}) {
    try {
      const query = getQuery(filter, sort, page);
      const url = `${apiUrl}/posts?${query}`;

      const res = await fetch(url, getReqOptions());

      return await res.json();
    } catch (err) {
      throw Error("Error getting posts, at api", err);
    }
  }

  async function getPostComments(id) {
    try {
      const url = `${apiUrl}/posts/${id}/comments`;

      const res = await fetch(url, getReqOptions());

      return await res.json();
    } catch (err) {
      throw Error("Error getting post comments at api", id, err);
    }
  }

  // Comment
  async function getComment(id) {
    try {
      const url = `${apiUrl}/comments/${id}`;

      const res = await fetch(url, getReqOptions());

      return await res.json();
    } catch (err) {
      throw Error("Error getting comment at API CMS", err, id);
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

      return await res.json();
    } catch (err) {
      throw Error("Error submiting comment", err, username, text, post);
    }
  }

  async function updateComment(id, params) {
    try {
      const url = `${apiUrl}/comments/${id}`;
      const options = {
        ...getReqOptions("PUT", user),
        body: JSON.stringify({ ...params }),
      };

      const res = await fetch(url, options);

      return await res.json();
    } catch (err) {
      throw Error("Error updating comment at API CMS", err, id, params);
    }
  }

  // Auth
  async function signIn(username, password) {
    try {
      const url = `${apiUrl}/sign-in`;
      const options = {
        ...getReqOptions("POST"),
        body: JSON.stringify({ username, password }),
      };

      const res = await fetch(url, options);

      return await res.json();
    } catch (err) {
      throw Error("Error sign in user at CMS", err, username, password);
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
