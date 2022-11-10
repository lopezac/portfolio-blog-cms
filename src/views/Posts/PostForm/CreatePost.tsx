import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BlogApi } from "src/services";
import { Form, FormRow, TextInput } from "src/components/forms";
import { H1, Label } from "src/components/globals";
import { PrimaryFormBtn, SecondaryFormBtn } from "src/components/buttons";
import { useSocket } from "src/hooks";
import TextEditor from "./TextEditor";
import ButtonsDiv from "./ButtonsDiv.styles";

export default function CreatePost() {
  const editorRef = useRef<any>(null);
  const navigate = useNavigate();
  const blogApi = BlogApi();
  const socket = useSocket();

  async function handleSubmit(e: Event) {
    if (!socket || !editorRef.current || !e.target) return;

    e.preventDefault();
    const text = editorRef.current.getContent();
    const target = e.target as HTMLFormElement;

    const title = e.target.title.value;
    const keyword = e.target.keyword.value;
    const imageUrl = e.target.imageUrl.value;

    const post = await blogApi.createPost(title, keyword, text, imageUrl);
    if (!post) return;
    socket.emit("post:create", post);
    navigate(`/posts/${post._id}`);
  }

  function goBack() {
    navigate(-1);
  }

  return (
    <>
      <H1>Create Post</H1>
      <Form onSubmit={handleSubmit}>
        <FormRow>
          <Label htmlFor="titlePost">Title</Label>
          <TextInput
            name="titlePost"
            id="titlePost"
            required
            minLength="3"
            maxLength="300"
          />
        </FormRow>

        <FormRow>
          <Label htmlFor="keyword">Keyword</Label>
          <TextInput
            name="keyword"
            id="keyword"
            required
            minLength="2"
            maxLength="80"
          />
        </FormRow>

        <FormRow>
          <Label htmlFor="imageUrl">Cover image URL</Label>
          <TextInput name="imageUrl" id="imageUrl" required minLength="2" />
        </FormRow>

        <FormRow>
          <TextEditor editorRef={editorRef} />
        </FormRow>

        <ButtonsDiv>
          <SecondaryFormBtn type="submit">Create</SecondaryFormBtn>
          <PrimaryFormBtn type="button" onClick={goBack}>
            Cancel
          </PrimaryFormBtn>
        </ButtonsDiv>
      </Form>
    </>
  );
}
