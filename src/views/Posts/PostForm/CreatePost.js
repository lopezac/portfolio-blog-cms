import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BlogApi } from "@services";
import { Form, FormRow, TextInput } from "@components/forms";
import { H1, Label } from "@components/globals";
import { PrimaryFormBtn, SecondaryFormBtn } from "@components/buttons";
import TextEditor from "./TextEditor";
import ButtonsDiv from "./ButtonsDiv.styles";

export default function CreatePost() {
  const editorRef = useRef(null);
  const navigate = useNavigate();
  const blogApi = BlogApi();

  function handleSubmit(e) {
    e.preventDefault();
    const text = editorRef.current.getContent();
    const title = e.target.title.value;
    const keyword = e.target.keyword.value;
    const imageUrl = e.target.imageUrl.value;

    blogApi.createPost(title, keyword, text, imageUrl).then((post) => {
      navigate(`/posts/${post._id}`);
    });
  }

  function goBack() {
    navigate(-1);
  }

  return (
    <>
      <H1>Create Post</H1>
      <Form onSubmit={handleSubmit}>
        <FormRow>
          <Label htmlFor="title">Title</Label>
          <TextInput
            name="title"
            id="title"
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
