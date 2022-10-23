import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BlogApi } from "@services";
import { TextInput } from "@components/forms";
import TextEditor from "./TextEditor";
import { Form, FormRow } from "@components/forms";

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
    <Form onSubmit={handleSubmit}>
      <FormRow>
        <label htmlFor="title">Title</label>
        <TextInput
          name="title"
          id="title"
          required
          minLength="3"
          maxLength="300"
        />
      </FormRow>
      <FormRow>
        <label htmlFor="keyword">Keyword</label>
        <TextInput
          name="keyword"
          id="keyword"
          required
          minLength="2"
          maxLength="80"
        />
      </FormRow>
      <FormRow>
        <label htmlFor="imageUrl">Cover image URL</label>
        <TextInput name="imageUrl" id="imageUrl" required minLength="2" />
      </FormRow>
      <FormRow>
        <TextEditor editorRef={editorRef} />
      </FormRow>
      <button>Create</button>
      <button type="button" onClick={goBack}>
        Cancel
      </button>
    </Form>
  );
}
