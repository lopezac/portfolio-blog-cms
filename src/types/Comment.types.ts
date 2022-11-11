export type CommentObject = {
  _id: string;
  post: string;
  text: string;
  timestamp: Date | number;
  username: string;
} | null;

export type ArrayComments = Array<CommentObject>;
