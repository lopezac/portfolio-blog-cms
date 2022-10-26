import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BlogApi } from "@services";
import { Form, FormRow, TextInput, DateInput } from "@components/forms";
import { H1, Label } from "@components/globals";
import { PrimaryFormBtn, SecondaryFormBtn } from "@components/buttons";

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
    <>
      <H1>Update Comment</H1>
      <Form onSubmit={handleSubmit}>
        <FormRow>
          <Label htmlFor="username">Username</Label>
          <TextInput
            name="username"
            id="username"
            required
            minLength="2"
            maxLength="125"
            value={comment.username}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="text">Text</Label>
          <TextInput
            name="text"
            id="text"
            required
            minLength="2"
            maxLength="500"
            value={comment.text}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="timestamp">Timestamp</Label>
          <DateInput
            name="timestamp"
            id="timestamp"
            required
            value={comment.timestamp}
          />
        </FormRow>
        <SecondaryFormBtn>Update</SecondaryFormBtn>
        <PrimaryFormBtn type="button" onClick={goBack}>
          Cancel
        </PrimaryFormBtn>
      </Form>
    </>
  );
}
