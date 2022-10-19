import { array } from "prop-types";
import PostHeaderRow from "./PostHeaderRow";
import PostRow from "./PostRow";

function PostsTable({ posts }) {
  console.log(posts);

  return (
    <table>
      <PostHeaderRow />
      <tbody>
        {posts.map((post) => {
          return (
            <PostRow
              key={post._id}
              published={post.published}
              title={post.title}
              date={post.timestamp}
              keyword={post.keyword}
            />
          );
        })}
      </tbody>
    </table>
  );
}

PostsTable.propTypes = {
  posts: array,
};

export default PostsTable;
