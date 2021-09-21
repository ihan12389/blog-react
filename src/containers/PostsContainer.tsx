import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import PostsHeader from "../components/posts/PostsHeader";
import PostsContent from "../components/posts/PostsContent";
import SideBar from "../components/posts/SideBar";

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

const PostsContainer = () => {
  return (
    <ContainerPosts fluid>
      <SideBar />
      <FirstRow>
        <PostsHeader />
      </FirstRow>
      <SecondRow>
        <PostsContent />
      </SecondRow>
    </ContainerPosts>
  );
};

export default PostsContainer;
