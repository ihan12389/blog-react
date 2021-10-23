import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../reducers";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
} from "react-bootstrap";
import { CommentActions } from "../../actions/comment";

/* STYLE */
const CommentContainer = styled(Container)`
  margin: 30px 0;
  padding: 0px 20px; ;
`;

const Title = styled.span`
  font-size: 22px;
  color: #444444;
`;

const ContentContainer = styled(Container)`
  min-height: 60px;
`;

const CommentInputGroup = styled(InputGroup)``;

const CommentRow = styled(Row)`
  border-top: 1px solid #dddddd;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  .contentRow {
    display: flex;
    justify-content: space-between;
  }
  .nicknameRow {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 18px;
    .delete {
      cursor: pointer;
    }
  }
`;

interface WriteData {
  comments: Array<Object>;
  postId: String;
}
interface C {
  id: String;
  uid: String;
  time: String;
  content: String;
  nickname: String;
}

const Comments = () => {
  /* USE STATE */
  const [comments, setComments] = useState([{}]);
  const [comment, setComment] = useState("");
  /* REDUX */
  const dispatch = useDispatch();
  const commentState = useSelector((state: RootState) => state.comment);
  const postState = useSelector((state: RootState) => state.post);
  const authState = useSelector((state: RootState) => state.auth);
  /* SET INIT */
  useEffect(() => {
    if (postState.postId !== "") {
      dispatch(CommentActions.read(postState.postId));
    }
  }, [postState]);

  useEffect(() => {
    console.log("새로고침 합니다.");
    console.log(commentState);
    if (commentState.comments !== undefined) {
      setComments(commentState.comments);
    }
  }, [commentState]);

  /* UPLOAD COMMENT */
  const uploadComment = (event: any) => {
    if (comment !== "") {
      // id를 구합니다.
      const id = Date.now();
      // time을 구합니다.
      const T = new Date();
      var time = "";
      time += `${
        T.getMonth() + 1 < 10 ? `0${T.getMonth() + 1}` : T.getMonth() + 1
      }-${T.getDate() < 10 ? `0${T.getDate()}` : T.getDate()} ${
        T.getHours() < 10 ? `0${T.getHours()}` : T.getHours()
      }:${T.getMinutes() < 10 ? `0${T.getMinutes()}` : T.getMinutes()}`;
      // object를 만듭니다.
      const commentObj = {
        id: String(id),
        time,
        uid: authState.uid,
        nickname: authState.nickname,
        content: comment,
      };
      // comments에 끼워줍니다.
      const newComments = comments;
      newComments.push(commentObj);

      const writeData: WriteData = {
        postId: postState.postId,
        comments: newComments,
      };

      dispatch(CommentActions.write(writeData));
      setComment("");
    }
  };
  /* UPLOAD COMMENT */
  const uploadCommentEnter = (event: any) => {
    console.log("enter event 발생했음!");
    console.log(event.charCode);
    if (event.charCode === 13) {
      console.log("13이랑 일치함");
      if (comment !== "") {
        // id를 구합니다.
        const id = Date.now();
        // time을 구합니다.
        const T = new Date();
        var time = "";
        time += `${
          T.getMonth() + 1 < 10 ? `0${T.getMonth() + 1}` : T.getMonth() + 1
        }-${T.getDate() < 10 ? `0${T.getDate()}` : T.getDate()} ${
          T.getHours() < 10 ? `0${T.getHours()}` : T.getHours()
        }:${T.getMinutes() < 10 ? `0${T.getMinutes()}` : T.getMinutes()}`;
        // object를 만듭니다.
        const commentObj = {
          id: String(id),
          time,
          uid: authState.uid,
          nickname: authState.nickname,
          content: comment,
        };
        // comments에 끼워줍니다.
        const newComments = comments;
        newComments.push(commentObj);

        const writeData: WriteData = {
          postId: postState.postId,
          comments: newComments,
        };

        dispatch(CommentActions.write(writeData));
        setComment("");
      }
    }
  };

  /* DELETE COMMENT */
  const deleteComment = (event: any) => {
    var newComments = comments;
    newComments = newComments.filter(
      (c: any) => c.id !== event.target.parentElement.id
    );

    const writeData: WriteData = {
      postId: postState.postId,
      comments: newComments,
    };

    dispatch(CommentActions.write(writeData));
  };

  return (
    <CommentContainer>
      <Title>
        Comment
        <span>
          <b> {comments.length}</b>
        </span>
      </Title>
      <ContentContainer>
        {comments.map((c: any) => {
          return (
            <CommentRow>
              <div className="nicknameRow" id={c.id}>
                <span className="nickname">{c.nickname}</span>
                {c.uid === authState.uid && (
                  <span className="delete" onClick={deleteComment}>
                    ❌
                  </span>
                )}
              </div>
              <div className="contentRow">
                <span className="content">{c.content}</span>
                <span className="time">{c.time}</span>
              </div>
            </CommentRow>
          );
        })}
      </ContentContainer>
      {authState.uid === undefined || authState.uid === "" ? (
        <></>
      ) : (
        <>
          <CommentInputGroup className="mb-3">
            <FormControl
              placeholder="please enter comment"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              onKeyPress={uploadCommentEnter}
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              onClick={uploadComment}
            >
              Upload
            </Button>
          </CommentInputGroup>
        </>
      )}
    </CommentContainer>
  );
};

export default Comments;
