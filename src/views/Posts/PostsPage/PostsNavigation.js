import { numsUpTo } from "@utils/various";
import { NoColorAnchor } from "@components/wrappers";
import { CenterSmallNav } from "@components/lists";

export default function PostsNavigation() {
  return (
    <CenterSmallNav>
      {numsUpTo(10).map((num) => {
        return (
          <NoColorAnchor href={`/posts?page=${num}`} key={num}>
            {num}
          </NoColorAnchor>
        );
      })}
    </CenterSmallNav>
  );
}
