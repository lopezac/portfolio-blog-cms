import { string } from "prop-types";
import { formatDate } from "@utils/date";
import { RowList } from "@components/lists";
import { H1 } from "@components/globals";
import DeleteBtn from "./DeleteBtn";
import UpdateBtn from "./UpdateBtn";
import SpaceBetweenFlex from "./SpaceBetweenFlex.styles";

function PostInfo({ title, date, keyword, text }) {
  return (
    <section>
      <SpaceBetweenFlex>
        <H1>{title}</H1>
        <div>
          <UpdateBtn type="posts">Update</UpdateBtn>
          <DeleteBtn type="posts">Delete</DeleteBtn>
        </div>
      </SpaceBetweenFlex>
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
