import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BlogApi } from "@services";
import { TextInput, DateInput } from "@components/forms";

export default function UpdatePost() {
  const [comment, setComment] = useState(null);

  const blogApi = BlogApi();
  const { commentId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    blogApi.getComment(commentId).then((data) => setComment(data));
  }, [commentId]);

  function handleSubmit(e) {
    e.preventDefault();

    const username = e.target.username.value;
    const timestamp = e.target.timestamp.value;
    const text = e.target.text.value;

    blogApi.updateComment(commentId, { username, timestamp, text }).then(() => {
      navigate(`/posts/${comment.post}`);
    });
  }

  function goBack() {
    navigate(-1);
  }

  if (!comment) return;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <TextInput
          name="username"
          id="username"
          required
          minLength="2"
          maxLength="125"
          value={comment.username}
        />
      </div>
      <div>
        <label htmlFor="text">Text</label>
        <TextInput
          name="text"
          id="text"
          required
          minLength="2"
          maxLength="500"
          value={comment.text}
        />
      </div>
      <div>
        <label htmlFor="timestamp">Timestamp</label>
        <DateInput
          name="timestamp"
          id="timestamp"
          required
          value={comment.timestamp}
        />
      </div>
      <button>Update</button>
      <button type="button" onClick={goBack}>
        Cancel
      </button>
    </form>
  );
}
