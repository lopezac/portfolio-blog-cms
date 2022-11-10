import { formatDate } from "src/utils/date";
import { RowList } from "src/components/lists";
import { SmallGrayLi } from "src/components/listitems";
import { ActionButtons } from "src/components/buttons";
import SpaceBetweenFlex from "./styles/SpaceBetweenFlex.styles";
import Title from "./styles/Title.styles";
import PostText from "./PostText";

type TPostInfo = {
  title: string;
  date: Date | number;
  keyword: string;
  text: string;
};

function PostInfo({ title, date, keyword, text }: TPostInfo) {
  return (
    <section>
      <SpaceBetweenFlex>
        <Title>{title}</Title>
        <ActionButtons type="posts" />
      </SpaceBetweenFlex>
      <RowList>
        <SmallGrayLi>{formatDate(date).toString()}</SmallGrayLi>
        <SmallGrayLi>{keyword}</SmallGrayLi>
      </RowList>
      <PostText text={text} />
    </section>
  );
}

export default PostInfo;
