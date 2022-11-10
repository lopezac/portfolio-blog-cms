import { ReactNode } from "react";

type ActionBtnParams = {
  type: "posts" | "comments";
  children: ReactNode;
  commentId?: string;
};

export default ActionBtnParams;
