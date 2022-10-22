import { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useNavigate, useParams } from "react-router-dom";
import { BlogApi } from "@services";
import { TextInput } from "@components/forms";

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

    blogApi.updatePost(postId, { title, keyword, text }).then(() => {
      navigate(`/posts/${post._id}`);
    });
  }

  function goBack() {
    navigate(-1);
  }

  if (!post) return;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <TextInput
          name="title"
          id="title"
          required
          minLength="3"
          maxLength="300"
          value={post.title}
        />
      </div>
      <div>
        <label htmlFor="keyword">Keyword</label>
        <TextInput
          name="keyword"
          id="keyword"
          required
          minLength="2"
          maxLength="80"
          value={post.keyword}
        />
      </div>
      <div>
        <Editor
          apiKey={process.env.REACT_APP_TINY_API}
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue={post.text}
          init={{ height: 500 }}
        />
      </div>
      <button>Update</button>
      <button type="button" onClick={goBack}>
        Cancel
      </button>
    </form>
  );
}
