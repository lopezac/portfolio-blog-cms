import { getApiUrl } from "src/utils/various";
import { useAuth } from "src/hooks";
import {
  ArrayPosts,
  PostObject,
  ArrayComments,
  CommentObject,
} from "src/types/Post.types";
import { formatIntoDate } from "src/utils/format";
import getQuery from "./getQuery";
import getReqOptions from "./getReqOptions";

export default function BlogApi() {
  const apiUrl = getApiUrl();
  const { user } = useAuth();

  // Post
  async function getPost(id: string): Promise<PostObject> {
    try {
      const url = `${apiUrl}/posts/${id}`;

      const res = await fetch(url, getReqOptions());
      let data = await res.json();
      data = formatIntoDate(data);

      return data;
    } catch (err) {
      throw Error("Error getting post, at api", err as ErrorOptions);
    }
  }

  async function createPost(
    title: string,
    keyword: string,
    text: string,
    imageUrl: string
  ): Promise<PostObject> {
    try {
      const url = `${apiUrl}/posts`;
      const options = {
        ...getReqOptions("POST", user),
        body: JSON.stringify({ title, keyword, text, imageUrl }),
      };

      const res = await fetch(url, options);
      let data = await res.json();
      data = formatIntoDate(data);

      return data;
    } catch (err) {
      throw Error("Error creating post at API CMS", err as ErrorOptions);
    }
  }

  async function updatePost(id: string, params: object): Promise<PostObject> {
    try {
      const url = `${apiUrl}/posts/${id}`;
      const options = {
        ...getReqOptions("PUT", user),
        body: JSON.stringify({ ...params }),
      };

      const res = await fetch(url, options);
      let data = await res.json();
      data = formatIntoDate(data);

      return data;
    } catch (err) {
      throw Error("Error updating post at CMS", err as ErrorOptions);
    }
  }

  async function deletePost(id: string, type = "posts"): Promise<string> {
    try {
      const url = `${apiUrl}/${type}/${id}`;
      const options = { ...getReqOptions("DELETE", user) };

      const res = await fetch(url, options);
      const data: string = await res.json();

      return data;
    } catch (err) {
      throw Error("Error deleting at CMS API", err as ErrorOptions);
    }
  }

  // Posts
  type postsParams = { filter?: string; sort?: string; page?: number };
  async function getPosts({
    filter,
    sort,
    page,
  }: postsParams): Promise<ArrayPosts> {
    try {
      const query = getQuery(filter, sort, page);
      const url = `${apiUrl}/posts?${query}`;

      const res = await fetch(url, getReqOptions());
      const data = await res.json();
      // loop through data posts and convert each post timestamp string into date

      return data;
    } catch (err) {
      throw Error("Error getting posts, at api", err as ErrorOptions);
    }
  }

  async function getPostComments(id: string): Promise<ArrayComments> {
    try {
      const url = `${apiUrl}/posts/${id}/comments`;

      const res = await fetch(url, getReqOptions());
      const data = await res.json();
      // loop through data posts and convert each post timestamp string into date

      return data;
    } catch (err) {
      throw Error("Error getting post comments at api", err as ErrorOptions);
    }
  }

  // Comment
  async function getComment(id: string): Promise<CommentObject> {
    try {
      const url = `${apiUrl}/comments/${id}`;

      const res = await fetch(url, getReqOptions());
      let data = await res.json();
      data = formatIntoDate(data);

      return data;
    } catch (err) {
      throw Error("Error getting comment at API CMS", err as ErrorOptions);
    }
  }

  async function updateComment(
    id: string,
    params: object
  ): Promise<CommentObject> {
    try {
      const url = `${apiUrl}/comments/${id}`;
      const options = {
        ...getReqOptions("PUT", user),
        body: JSON.stringify({ ...params }),
      };

      const res = await fetch(url, options);
      const data = await res.json();

      return data;
    } catch (err) {
      throw Error("Error updating comment at API CMS", err as ErrorOptions);
    }
  }

  // Auth
  async function signIn(username: string, password: string): Promise<string> {
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
    signIn,
  };
}
