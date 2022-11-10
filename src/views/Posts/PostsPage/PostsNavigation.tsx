import { numsUpTo } from "src/utils/various";
import { NoColorAnchor } from "src/components/wrappers";
import { CenterSmallNav } from "src/components/lists";

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
