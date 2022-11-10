import { useNavigate, useParams } from "react-router-dom";
import { BlogApi } from "src/services";
import { useSocket } from "src/hooks";
import ActionBtnParams from "./ActionButtons.types";
import { PrimaryBtn } from "./index";

function DeleteBtn({ type, children, commentId }: ActionBtnParams) {
  const blogApi = BlogApi();
  const { postId } = useParams();
  const navigate = useNavigate();
  const socket = useSocket();

  async function handleClick() {
    try {
      if (!socket) return;
      if (type === "posts") {
        if (!postId) return;
        const postIdentifier = await blogApi.deletePost(postId, type);
        socket.emit("post:delete", postIdentifier);
        navigate(`/${type}`);
      } else {
        await blogApi.deletePost(commentId, type);
        socket.emit("comment:delete", commentId);
      }
    } catch (err) {
      throw Error("Error with delete btn at CMS", err as ErrorOptions);
    }
  }

  return (
    <PrimaryBtn type="button" onClick={handleClick}>
      {children}
    </PrimaryBtn>
  );
}

export default DeleteBtn;
