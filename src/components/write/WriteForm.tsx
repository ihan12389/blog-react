import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Button, InputGroup, FormControl } from "react-bootstrap";
import { IoReturnDownBackSharp } from "react-icons/io5";
import CKEditor from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import Link from "@ckeditor/ckeditor5-link/src/link";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Font from "@ckeditor/ckeditor5-font/src/font";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import List from "@ckeditor/ckeditor5-list/src/list";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import Base64UploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter";
import { useSelector, useDispatch } from "react-redux";
import { write, PostActions } from "../../actions/post";
import { RootState } from "../../reducers";

/* STYLE */
const FormWrapper = styled(Container)`
  .ck-editor__editable_inline {
    min-height: 200px;
    max-height: 700px;
    border: 1px solid #dddddd;
  }
`;

const ButtonWrapper = styled(Container)`
  width: 100%;
  display: flex;
  margin: 50px 0;
  padding: 0;
  justify-content: space-between;
  button {
    font-size: 20px;
  }
`;

const WriteForm = (props: any) => {
  /* REDUX */
  const authState = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  /* USESTATE */
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  /* UPLOAD */
  const upload = async (event: any) => {
    // 입력 안한 내용이 있다면
    if (title.replaceAll(" ", "") === "") {
      alert("제목을 입력해주세요.");
      return;
    }
    if (content.replaceAll(" ", "") === "") {
      alert("내용을 입력해주세요.");
      return;
    }

    /* 날짜 구하기 */
    const D = new Date();
    const year = D.getFullYear();
    const month = D.getMonth() + 1;
    const date = D.getDate();
    const hour = D.getHours();
    const minute = D.getMinutes();

    const date_string = `${String(year).substring(2)}-${
      month < 10 ? `0${month}` : month
    }-${date < 10 ? `0${date}` : date}\n${hour < 10 ? `0${hour}` : hour}:${
      minute < 10 ? `0${minute}` : minute
    }`;

    /* 프리뷰 이미지 링크 구하기 */
    const indexOfStart = content.indexOf("src=");
    const indexOfLast = content.indexOf("></figure>");
    let imgSrc = "";
    if (indexOfStart === -1) {
      imgSrc = "";
    } else {
      imgSrc = content.substring(indexOfStart + 5, indexOfLast - 1);
      imgSrc = imageToDataUri(imgSrc, 120, 120);
    }

    /* DISPATCH */
    await dispatch(
      PostActions.write({
        title: title,
        content: content,
        uid: authState.uid,
        nickname: authState.nickname,
        date: date_string,
        previewImg: imgSrc,
        likes: 0,
      })
    );
  };

  /* Resize Img BASE64 for PreviewImg */
  function imageToDataUri(url: string, width: number, height: number) {
    // create an off-screen canvas
    var canvas = document.createElement("canvas"),
      ctx: any = canvas.getContext("2d");

    var img = document.createElement("img");
    img.src = url;

    // set its dimension to target size
    canvas.width = width;
    canvas.height = height;

    // draw source image into the off-screen canvas:
    ctx.drawImage(img, 0, 0, width, height);

    // encode image to data-uri with base64 version of compressed image
    return canvas.toDataURL();
  }

  return (
    <FormWrapper>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Title</InputGroup.Text>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={title}
          onChange={(event): any => setTitle(event.target.value)}
        />
      </InputGroup>
      <CKEditor
        onInit={(editor: any) => {
          editor.ui
            .getEditableElement()
            .parentElement.insertBefore(
              editor.ui.view.toolbar.element,
              editor.ui.getEditableElement()
            );
        }}
        config={{
          language: "ko",
          plugins: [
            Essentials,
            Paragraph,
            Bold,
            Italic,
            Heading,
            Indent,
            IndentBlock,
            Underline,
            Strikethrough,
            BlockQuote,
            Font,
            Alignment,
            List,
            Link,
            PasteFromOffice,
            Image,
            ImageStyle,
            ImageToolbar,
            ImageUpload,
            ImageResize,
            Base64UploadAdapter,
            Table,
            TableToolbar,
            TableProperties,
            TableCellProperties,
            TextTransformation,
          ],
          toolbar: props.toolbar
            ? props.toolbar
            : [
                "heading",
                "|",
                "bold",
                "italic",
                "underline",
                "strikethrough",
                "|",
                "fontSize",
                "fontColor",
                "fontBackgroundColor",
                "|",
                "alignment",
                "outdent",
                "indent",
                "bulletedList",
                "numberedList",
                "blockQuote",
                "|",
                "link",
                "insertTable",
                "imageUpload",
                "|",
                "undo",
                "redo",
              ],
          fontSize: {
            options: [
              14,
              15,
              16,
              17,
              18,
              19,
              "default",
              21,
              22,
              23,
              24,
              25,
              26,
              27,
              28,
              29,
              30,
            ],
          },
          alignment: {
            options: ["justify", "left", "center", "right"],
          },
          table: {
            contentToolbar: [
              "tableColumn",
              "tableRow",
              "mergeTableCells",
              "tableProperties",
              "tableCellProperties",
            ],
          },
          image: {
            resizeUnit: "px",
            toolbar: [
              "imageStyle:alignLeft",
              "imageStyle:full",
              "imageStyle:alignRight",
              "|",
              "imageTextAlternative",
            ],
            styles: ["full", "alignLeft", "alignRight"],
            type: ["JPEG", "JPG", "GIF", "PNG"],
          },
          typing: {
            transformations: {
              remove: [
                "enDash",
                "emDash",
                "oneHalf",
                "oneThird",
                "twoThirds",
                "oneForth",
                "threeQuarters",
              ],
            },
          },
        }}
        editor={DecoupledEditor}
        {...props}
        onChange={(event: any, editor: any) => {
          const data = editor.getData();
          setContent(data);
        }}
      />
      <ButtonWrapper>
        <Button variant="outline-dark" onClick={() => props.go.goBack()}>
          <IoReturnDownBackSharp />
        </Button>
        <Button className="submit" variant="outline-primary" onClick={upload}>
          Upload
        </Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default WriteForm;
