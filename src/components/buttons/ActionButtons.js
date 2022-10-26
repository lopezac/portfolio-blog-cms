import { string } from "prop-types";
import UpdateBtn from "./UpdateBtn";
import DeleteBtn from "./DeleteBtn";

function ActionButtons({ type, commentId }) {
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

ActionButtons.propTypes = {
  type: string,
  commentId: string,
};

export default ActionButtons;
