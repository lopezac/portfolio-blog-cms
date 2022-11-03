import { node, string } from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import { PrimaryBtn } from "@components/buttons";
import { BlogApi } from "@services";
import { useSocket } from "@hooks";

function DeleteBtn({ type, children, commentId }) {
  const blogApi = BlogApi();
  const { postId } = useParams();
  const navigate = useNavigate();
  const socket = useSocket();

  async function handleClick() {
    try {
      if (type === "posts") {
        const postIdentifier = await blogApi.deletePost(postId, type);
        socket.emit("post:delete", postIdentifier);
        navigate(`/${type}`);
      } else {
        await blogApi.deletePost(commentId, type);
        socket.emit("comment:delete", commentId);
      }
    } catch (err) {
      throw Error("Error with delete btn at CMS", err, type);
    }
  }

  return (
    <PrimaryBtn type="button" onClick={handleClick}>
      {children}
    </PrimaryBtn>
  );
}

DeleteBtn.propTypes = {
  type: string,
  commentId: string,
  children: node,
};

export default DeleteBtn;
