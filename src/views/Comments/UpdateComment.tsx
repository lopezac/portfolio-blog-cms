import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BlogApi } from "src/services";
import { useSocket } from "src/hooks";
import { Form, FormRow, TextInput, DateInput } from "src/components/forms";
import { H1, Label } from "src/components/globals";
import { PrimaryFormBtn, SecondaryFormBtn } from "src/components/buttons";
import { CommentObject } from "src/types/Comment.types";
import { FormElements } from "src/types/Form.types";

export default function UpdateComment() {
  const [comment, setComment] = useState<CommentObject>(null);
  const { commentId } = useParams();
  const navigate = useNavigate();
  const socket = useSocket();
  const blogApi = BlogApi();

  useEffect(() => {
    if (!commentId) return;
    blogApi.getComment(commentId).then((data) => setComment(data));
  }, [commentId]);

  async function handleSubmit(e: FormEvent) {
    if (!commentId || !socket || !comment) return;
    e.preventDefault();

    const target = e.target as FormElements;

    const username = target.username.value;
    const timestamp = target.timestamp.value;
    const text = target.text.value;

    const updatedComment = await blogApi.updateComment(commentId, {
      username,
      timestamp,
      text,
    });
    socket.emit("comment:update", updatedComment);
    navigate(`/posts/${comment.post}`);
  }

  function goBack() {
    navigate(-1);
  }

  if (!comment) return <H1>There is no comment to update</H1>;
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
