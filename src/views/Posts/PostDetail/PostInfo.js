import { string } from "prop-types";
import DeleteBtn from "@views/Posts/DeleteBtn";
import { formatDate } from "@utils/date";
import { RowList } from "@components/lists";
import { GreenBtn } from "@components/buttons";

function PostInfo({ title, date, keyword, text }) {
  return (
    <section>
      <div>
        <h1>{title}</h1>
        <GreenBtn>Update</GreenBtn>
        <DeleteBtn type="posts">Delete</DeleteBtn>
      </div>
      <RowList>
        <li>{formatDate(date)}</li>
        <li>{keyword}</li>
      </RowList>
      <p>{text}</p>
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
