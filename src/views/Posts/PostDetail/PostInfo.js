import { string } from "prop-types";
import { formatDate } from "@utils/date";
import { RowList } from "@components/lists";
import { SmallGrayLi } from "@components/listitems";
import { ActionButtons } from "@components/buttons";
import SpaceBetweenFlex from "./styles/SpaceBetweenFlex.styles";
import Title from "./styles/Title.styles";
import PostText from "./PostText";

function PostInfo({ title, date, keyword, text }) {
  return (
    <section>
      <SpaceBetweenFlex>
        <Title>{title}</Title>
        <ActionButtons type="posts" />
      </SpaceBetweenFlex>
      <RowList>
        <SmallGrayLi>{formatDate(date)}</SmallGrayLi>
        <SmallGrayLi>{keyword}</SmallGrayLi>
      </RowList>
      <PostText text={text} />
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
