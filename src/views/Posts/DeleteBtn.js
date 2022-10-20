import { node, string } from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import { RedBtn } from "@components/buttons";
import { BlogApi } from "@services";

function DeleteBtn({ type, children }) {
  const blogApi = BlogApi();
  const { postId } = useParams();
  const navigate = useNavigate();

  async function handleClick() {
    try {
      await blogApi.deletePost(postId, type);
      navigate("/posts");
    } catch (err) {
      throw Error("Error with delete btn at CMS", err, type);
    }
  }

  return (
    // check if type=button is applied in browser inspector
    <RedBtn type="button" onClick={handleClick}>
      {children}
    </RedBtn>
  );
}

DeleteBtn.propTypes = {
  type: string,
  children: node,
};

export default DeleteBtn;
