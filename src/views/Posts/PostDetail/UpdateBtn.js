import { node, string } from "prop-types";
import { useNavigate, useParams } from "react-router-dom";

function UpdateBtn({ type, children, commentId }) {
  const { postId } = useParams();
  const navigate = useNavigate();

  async function handleClick() {
    if (type === "posts") {
      navigate(`/${type}/${postId}/update`);
    } else {
      navigate(`/${type}/${commentId}/update`);
    }
  }

  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
}

UpdateBtn.propTypes = {
  type: string,
  commentId: string,
  children: node,
};

export default UpdateBtn;
