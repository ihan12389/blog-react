import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const WriteForm = () => {
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello world!</p>"
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log(data);
        }}
      />
    </div>
  );
};

export default WriteForm;
