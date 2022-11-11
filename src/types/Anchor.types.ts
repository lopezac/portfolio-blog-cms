import { ReactNode } from "react";

export interface AnchorTypes {
  children: ReactNode;
  href: string;
  rest?: ReactNode;
}
