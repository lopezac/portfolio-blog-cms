import { node, string } from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import { SecondaryBtn } from "@components/buttons";

function UpdateBtn({ type, children, commentId }) {
  const { postId } = useParams();
  const navigate = useNavigate();

  function handleClick() {
    if (type === "posts") {
      navigate(`/${type}/${postId}/update`);
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
