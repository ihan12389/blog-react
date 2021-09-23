import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import PostsHeader from "../components/posts/PostsHeader";
import PostsContent from "../components/posts/PostsContent";
import SideBar from "../components/posts/SideBar";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { PostsActions } from "../actions/posts";

/* STYLE */
const ContainerPosts = styled(Container)`
  height: 100%;
  padding: 0;
`;

const FirstRow = styled(Row)`
  height: 400px;
  margin: 0;
`;

const SecondRow = styled(Row)`
  margin: 0;
`;

const PostsContainer = (props: any) => {
  /* REDUX */
  const postsState = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch();
  /* USE STATE */
  const [page, setPage] = useState(1);
  const [currentPostsList, setCurrentPostsList] = useState(postsState);
  /* INIT SETTING */
  useEffect(() => {
    dispatch(PostsActions.read());
  }, [props.match.params.page]);

  useEffect(() => {
    if (props.match.params.page) {
      console.log("!", props.match.params.page);
    } else {
      console.log("!", props.match.params.page);
    }

    const slicedArr = postsState.slice(
      (props.match.params.page - 1) * 6,
      props.match.params.page * 6
    );

    console.log("slicedArr", slicedArr);
    setCurrentPostsList(slicedArr); // 만약 pageNumber가 1이라면 0~5, 2라면 6~11
    console.log("current", currentPostsList);
  }, [postsState]);

  return (
    <ContainerPosts fluid>
      <SideBar />
      <FirstRow>
        <PostsHeader />
      </FirstRow>
      <SecondRow>
        <PostsContent posts={currentPostsList} page={props.match.params.page} />
      </SecondRow>
    </ContainerPosts>
  );
};

export default PostsContainer;
