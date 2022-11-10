import { MutableRefObject } from "react";
import { Editor } from "@tinymce/tinymce-react";

type TTextEditor = { editorRef: MutableRefObject<any>, initialValue: string };

function TextEditor({ editorRef, initialValue }: TTextEditor) {
  if (!editorRef) return <h1>Loading Text Editor</h1>;
  return (
    <div style={{ margin: "5px 0" }}>
      <Editor
        apiKey={process.env.REACT_APP_TINY_API}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={initialValue}
        init={{
          height: 500,
          image_caption: true,
          automatic_uploads: true,
          image_title: true,
          paste_data_images: true,
          convert_urls: false,
          plugins:
            "preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount",
          toolbar:
            "styleselect bold italic underline | forecolor backcolor | alignleft aligncenter alignright | bullist numlist outdent indent | link image table youtube giphy | codesample code paste",
        }}
      />
    </div>
  );
}

export default TextEditor;
