import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BlogApi } from "@services";
import { Form, FormRow, TextInput } from "@components/forms";
import { H1, Label } from "@components/globals";
import { PrimaryFormBtn, SecondaryFormBtn } from "@components/buttons";
import TextEditor from "./TextEditor";
import ButtonsDiv from "./ButtonsDiv.styles";

export default function UpdatePost() {
  const [post, setPost] = useState(null);
  const editorRef = useRef(null);

  const blogApi = BlogApi();
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    blogApi.getPost(postId).then((data) => setPost(data));
  }, [postId]);

  function handleSubmit(e) {
    e.preventDefault();
    const text = editorRef.current.getContent();
    const title = e.target.title.value;
    const keyword = e.target.keyword.value;
    const imageUrl = e.target.imageUrl.value;

    blogApi.updatePost(postId, { title, keyword, text, imageUrl }).then(() => {
      navigate(`/posts/${post._id}`);
    });
  }

  function goBack() {
    navigate(-1);
  }

  if (!post) return;
  return (
    <>
      <H1>Update Post</H1>
      <Form onSubmit={handleSubmit}>
        <FormRow>
          <Label htmlFor="title">Title</Label>
          <TextInput
            name="title"
            id="title"
            required
            minLength="3"
            maxLength="300"
            value={post.title}
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
            value={post.keyword}
          />
        </FormRow>

        <FormRow>
          <Label htmlFor="imageUrl">Cover image URL</Label>
          <TextInput
            name="imageUrl"
            id="imageUrl"
            value={post.imageUrl}
            required
            minLength="2"
          />
        </FormRow>

        <FormRow>
          <TextEditor editorRef={editorRef} initialValue={post.text} />
        </FormRow>

        <ButtonsDiv>
          <SecondaryFormBtn type="submit">Update</SecondaryFormBtn>
          <PrimaryFormBtn type="button" onClick={goBack}>
            Cancel
          </PrimaryFormBtn>
        </ButtonsDiv>
      </Form>
    </>
  );
}
