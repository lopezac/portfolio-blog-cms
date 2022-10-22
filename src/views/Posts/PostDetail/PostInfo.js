import { string } from "prop-types";
import DeleteBtn from "./DeleteBtn";
import UpdateBtn from "./UpdateBtn";
import { formatDate } from "@utils/date";
import { RowList } from "@components/lists";

function PostInfo({ title, date, keyword, text }) {
  return (
    <section>
      <div>
        <h1>{title}</h1>
        <UpdateBtn type="posts">Update</UpdateBtn>
        <DeleteBtn type="posts">Delete</DeleteBtn>
      </div>
      <RowList>
        <li>{formatDate(date)}</li>
        <li>{keyword}</li>
      </RowList>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </section>
  );
}

PostInfo.propTypes = {
  title: string,
  date: string,
  keyword: string,
  text: string,
};

export default PostInfo;
