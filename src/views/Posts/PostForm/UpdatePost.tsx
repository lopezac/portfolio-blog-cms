import { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BlogApi } from "src/services";
import { Form, FormRow, TextInput } from "src/components/forms";
import { H1, Label } from "src/components/globals";
import { PrimaryFormBtn, SecondaryFormBtn } from "src/components/buttons";
import { useSocket } from "src/hooks";
import { PostObject } from "src/types/Post.types";
import { FormElements } from "src/types/Form.types";
import TextEditor from "./TextEditor";
import ButtonsDiv from "./ButtonsDiv.styles";

export default function UpdatePost() {
  const editorRef = useRef<any>(null);
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<PostObject>(null);
  const blogApi = BlogApi();
  const socket = useSocket();

  useEffect(() => {
    if (!postId) return;
    blogApi.getPost(postId).then((data) => setPost(data));
  }, [postId]);

  async function handleSubmit(e: FormEvent) {
    if (!socket || !postId || !editorRef.current || !e.target) return;

    e.preventDefault();
    const text = editorRef.current.getContent();
    const target = e.target as FormElements;

    const title = target.titlePost.value;
    const keyword = target.keyword.value;
    const imageUrl = target.imageUrl.value;

    const post = await blogApi.updatePost(postId, {
      title,
      keyword,
      text,
      imageUrl,
    });
    if (!post) return;
    socket.emit("post:update", post);
    navigate(`/posts/${post._id}`);
  }

  function goBack() {
    navigate(-1);
  }

  if (!post) return <H1>There is no post with that data</H1>;
  return (
    <>
      <H1>Update Post</H1>
      <Form onSubmit={handleSubmit}>
        <FormRow>
          <Label htmlFor="titlePost">Title</Label>
          <TextInput
            name="titlePost"
            id="titlePost"
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
