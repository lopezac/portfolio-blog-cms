import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BlogApi } from "@services";
import { TextInput } from "@components/forms";
import TextEditor from "./TextEditor";
import { Form, FormRow } from "@components/forms";

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
    <Form onSubmit={handleSubmit}>
      <FormRow>
        <label htmlFor="title">Title</label>
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
        <label htmlFor="keyword">Keyword</label>
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
        <label htmlFor="imageUrl">Cover image URL</label>
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
      <button>Update</button>
      <button type="button" onClick={goBack}>
        Cancel
      </button>
    </Form>
  );
}
