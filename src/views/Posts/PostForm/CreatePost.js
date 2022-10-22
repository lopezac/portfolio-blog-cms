import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useNavigate } from "react-router-dom";
import { BlogApi } from "@services";
import { TextInput } from "@components/forms";

export default function CreatePost() {
  const editorRef = useRef(null);
  const navigate = useNavigate();
  const blogApi = BlogApi();

  function handleSubmit(event) {
    event.preventDefault();
    const text = editorRef.current.getContent();
    const title = event.target.title.value;
    const keyword = event.target.keyword.value;

    blogApi.createPost(title, keyword, text).then((post) => {
      navigate(`/posts/${post._id}`);
    });
  }

  function goBack() {
    navigate(-1);
  }

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
        />
      </div>
      <div>
        <Editor
          apiKey={process.env.REACT_APP_TINY_API}
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 500,
            image_caption: true,
            automatic_uploads: true,
            image_title: true,
            file_picker_types: "image", //also media and file
            file_picker_callback: (cb, value, meta) => {},
          }}
          plugins="print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern"
          toolbar="styleselect bold italic underline | forecolor backcolor | alignleft aligncenter alignright | bullist numlist outdent indent | link image table youtube giphy | codesample code"
          // convert_urls={false}
        />
      </div>
      <button>Create</button>
      <button type="button" onClick={goBack}>
        Cancel
      </button>
    </form>
  );
}
