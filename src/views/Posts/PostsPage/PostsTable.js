import { array } from "prop-types";
import { H1 } from "@components/globals";
import PostHeaderRow from "./PostHeaderRow";
import PostRow from "./PostRow";
import Table from "./styles/Table.styles";
import Caption from "./styles/Caption.styles";

function PostsTable({ posts }) {
  if (!posts.length) return <H1>It seems there are no posts here</H1>;
  return (
    <Table>
      <Caption>Published and Unpublished Blog Posts</Caption>
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
              id={post._id}
            />
          );
        })}
      </tbody>
    </Table>
  );
}

PostsTable.propTypes = {
  posts: array,
};

export default PostsTable;
