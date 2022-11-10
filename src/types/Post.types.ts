export type PostObject = {
  _id: string;
  title: string;
  text: string;
  keyword: string;
  imageUrl: string;
  timestamp: Date | number;
  published: boolean;
  user: string;
} | null;

export type CommentObject = {
  _id: string;
  post: string;
  text: string;
  timestamp: Date | number;
  username: string;
};

export type ArrayPosts = Array<PostObject>;

export type ArrayComments = Array<CommentObject>;
