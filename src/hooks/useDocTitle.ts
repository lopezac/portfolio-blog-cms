import { useEffect, useState } from "react";

export default function useDocTitle(title: string) {
  const [docTitle, setDocTitle] = useState(title);

  useEffect(() => {
    document.title = docTitle;
  }, [docTitle]);

  return [docTitle, setDocTitle] as const;
}
