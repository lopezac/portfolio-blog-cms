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

export type ArrayPosts = Array<PostObject>;
