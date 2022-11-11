import { ReactNode } from "react";

export type Props = {
  [key: string]: string | ReactNode;
  value?: string;
  rest?: ReactNode;
};
