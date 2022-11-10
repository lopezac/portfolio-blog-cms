import UpdateBtn from "./UpdateBtn";
import DeleteBtn from "./DeleteBtn";

type TActionButtons = { type: "posts" | "comments"; commentId: string };

function ActionButtons({ type, commentId }: TActionButtons) {
  return (
    <div>
      <UpdateBtn type={type} commentId={commentId}>
        Update
      </UpdateBtn>
      <DeleteBtn type={type} commentId={commentId}>
        Delete
      </DeleteBtn>
    </div>
  );
}

export default ActionButtons;
