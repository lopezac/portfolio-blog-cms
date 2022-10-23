import PropTypes from "prop-types";
import { Editor } from "@tinymce/tinymce-react";

function TextEditor({ editorRef, initialValue }) {
  if (!editorRef) return;
  return (
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
  );
}

TextEditor.propTypes = {
  editorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default TextEditor;
