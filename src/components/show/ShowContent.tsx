import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Row, Button } from "react-bootstrap";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { useHistory } from "react-router";
import { PostActions } from "../../actions/post";
import { LikesActions } from "../../actions/likes";

/* STYLE */
const ShowContainer = styled(Container)`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HandleBarRow = styled(Row)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    text-align: center;
  }
  svg {
    width: auto;
    font-size: 24px;
    cursor: pointer;
    color: #444444;
  }
  @media (max-width: 760px) {
    h2 {
      font-size: 18px;
    }
  }
  @media (min-width: 760px) {
    h2 {
      font-size: 22px;
    }
  }
  @media (min-width: 992px) {
    h2 {
      font-size: 28px;
    }
  }
  @media (min-width: 1200px) {
    h2 {
      font-size: 32px;
    }
  }
`;

const PostInformRow = styled(Row)`
  width: 100%;
  margin-top: 30px;
  line-height: 2.2;
  span {
    display: block;
    height: 100%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .postNum {
    background-color: #dddddd;
  }
  .likes {
    background-color: #ff7eb3;
  }
  @media (max-width: 760px) {
    font-size: 13px;
    line-height: 2.2;
    .postNum {
      width: 50px;
      border: 1px solid black;
    }
    .writer {
      width: 100px;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
    }
    .title {
      flex: 1;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
    }
    .likes {
      width: 70px;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
    }
    .time {
      display: none;
      width: 150px;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
    }
  }
  @media (min-width: 760px) {
    font-size: 13px;
    .postNum {
      width: 50px;
      border: 1px solid black;
    }
    .writer {
      width: 120px;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
    }
    .title {
      flex: 1;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
    }
    .likes {
      width: 70px;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
    }
    .time {
      width: 150px;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
    }
  }
  @media (min-width: 992px) {
    font-size: 16px;
    height: 40px;
    .postNum {
      width: 60px;
      border: 1px solid black;
    }
    .writer {
      width: 150px;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
    }
    .title {
      flex: 1;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
    }
    .likes {
      width: 80px;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
    }
    .time {
      width: 150px;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
    }
  }
  @media (min-width: 1200px) {
    .postNum {
      width: 80px;
      border: 1px solid black;
    }
    .writer {
      width: 150px;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
    }
    .title {
      flex: 1;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
    }
    .likes {
      width: 80px;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
    }
    .time {
      width: 150px;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
    }
  }
`;

const Content = styled(Container)`
  margin: 0 30px;
  padding: 0;
`;

const BackButton = styled(Button)`
  align-self: flex-start;
  margin: 20px;
  opacity: 0.8;
  svg {
    width: auto;
    font-size: 30px;
  }
`;

const Viewer = styled.div`
  min-height: 40px;
  padding: 20px;
`;

const ButtonContainer = styled(Container)`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

const IconButton = styled.div`
  svg {
    cursor: pointer;
    font-size: 40px;
    margin: 20px;
  }
`;

const ShowContent = (props: any) => {
  /* MAKE HISTORY */
  const history = useHistory();
  /* REDUX */
  const authState = useSelector((state: RootState) => state.auth);
  const postState = useSelector((state: RootState) => state.post);
  const postsState = useSelector((state: RootState) => state.posts);
  const likesState = useSelector((state: RootState) => state.likes);
  const dispatch = useDispatch();
  /* USESTATE */
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [date, setDate] = useState("");
  const [contentDom, setContent] = useState("");
  const [uids, setUids] = useState([""]);
  /* INIT SETTING */
  useEffect(() => {
    if (postState.title !== "") setTitle(postState.title);
    if (postState.nickname !== "") setWriter(postState.nickname);
    if (postState.date !== "") setDate(postState.date);
    if (postState.content !== "") setContent(postState.content);
  }, [postState]);

  useEffect(() => {
    if (likesState.uids !== undefined) {
      setUids(likesState.uids);
    }
  }, [likesState]);

  /* GO TO BACK POST */
  const goBackPost = (event: any) => {
    if (props.idx === 0) {
      alert("이전 포스트가 없습니다.");
    } else {
      history.push({
        pathname: `/show/${postsState.posts[props.idx - 1]._id}`,
        state: {
          idx: props.idx - 1,
        },
      });
    }
  };

  /* GO TO FRONT POST */
  const goFrontPost = (event: any) => {
    if (props.idx === postsState.posts.length - 1) {
      alert("더 이상 포스트가 없습니다.");
    } else {
      history.push({
        pathname: `/show/${postsState.posts[props.idx + 1]._id}`,
        state: {
          idx: props.idx + 1,
        },
      });
    }
  };

  /* DELETE THIS POST */
  const deletePost = () => {
    dispatch(PostActions.postdelete(postState.postId));
    history.push(`/posts/${Math.floor(parseInt(props.idx) / 6) + 1}`);
  };

  /* ADD LIKE */
  const addLike = () => {
    if (authState.uid !== undefined) {
      if (!uids.includes(authState.uid)) {
        console.log("addLike 실행");
        console.log(postState.postId, uids);
        uids.push(authState.uid);
        dispatch(LikesActions.add({ postId: postState.postId, uids: uids }));
      }
    }
  };

  return (
    <ShowContainer>
      {postState.loading ? (
        <>loading...</>
      ) : (
        <>
          <HandleBarRow xs="3">
            <ImArrowLeft onClick={goBackPost} />
            <h2>{title}</h2>
            <ImArrowRight onClick={goFrontPost} />
          </HandleBarRow>
          <PostInformRow xs="5">
            <span className="postNum">{props.idx}</span>
            <span className="writer">{writer}</span>
            <span className="title">{title}</span>
            <span className="likes">👍{uids.length}</span>
            <span className="time">{date}</span>
          </PostInformRow>
          <Content>
            <Viewer
              className="ck-content"
              dangerouslySetInnerHTML={{ __html: contentDom }}
              id="viewer"
            ></Viewer>
          </Content>
          <ButtonContainer>
            <BackButton
              variant="outline-dark"
              onClick={() =>
                history.push(
                  `/posts/${Math.floor(parseInt(props.idx) / 6) + 1}`
                )
              }
            >
              <IoReturnDownBackSharp />
            </BackButton>
            <IconButton>
              {authState.uid === undefined || authState.uid === "" ? (
                <></>
              ) : (
                <>
                  <FcLike onClick={addLike} />
                </>
              )}
              {authState.nickname === postState.nickname ? (
                <>
                  <MdDelete onClick={deletePost} />
                </>
              ) : (
                <></>
              )}
            </IconButton>
          </ButtonContainer>
        </>
      )}
    </ShowContainer>
  );
};

export default ShowContent;
