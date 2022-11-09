import { useNavigate, useParams } from "react-router-dom";
import { node, string } from "prop-types";
import { SecondaryBtn } from "./index";
import ActionBtnParams from "./ActionButtons.types";

function UpdateBtn({ type, children, commentId }: ActionBtnParams) {
  const { postId } = useParams();
  const navigate = useNavigate();

  function handleClick() {
    if (type === "posts") {
      if (postId) {
        navigate(`/${type}/${postId}/update`);
      }
    } else {
      navigate(`/${type}/${commentId}/update`);
    }
  }

  return (
    <SecondaryBtn type="button" onClick={handleClick}>
      {children}
    </SecondaryBtn>
  );
}

UpdateBtn.propTypes = {
  type: string,
  commentId: string,
  children: node,
};

export default UpdateBtn;
