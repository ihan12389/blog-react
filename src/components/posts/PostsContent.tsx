import React, { useEffect } from "react";
import styled from "styled-components";
import { Container, Row, Image, Button } from "react-bootstrap";
import "../../style/fonts.css";
import PostsSearch from "../search/PostsSearch";
import { Link } from "react-router-dom";
import PaginationComponent from "./pagination";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

/* STYLE */
const ContentContainer = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const LinkComponent = styled(Link)`
  color: black;
  text-decoration: none;
  text-decoration-line: none;
`;

const ItemRow = styled(Row)`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  @media (max-width: 760px) {
    height: 120px;
    width: 470px;
  }
  @media (min-width: 760px) {
    height: 140px;
    width: 700px;
  }
  @media (min-width: 992px) {
    height: 150px;
    width: 900px;
  }
  @media (min-width: 1200px) {
    height: 150px;
    width: 1000px;
  }
`;

const PreviewImage = styled(Image)`
  margin: 0;
  padding: 0;
  object-fit: cover;
  @media (max-width: 760px) {
    width: 130px;
    height: 120px;
  }
  @media (min-width: 760px) {
    width: 160px;
    height: 140px;
  }
  @media (min-width: 992px) {
    width: 170px;
    height: 150px;
  }
  @media (min-width: 1200px) {
    width: 170px;
    height: 150px;
  }
`;

const TextContent = styled.span`
  overflow: hidden;
  height: 100%;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 22px;
  line-height: 1.8;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 760px) {
    width: 240px;
    font-size: 14px;
  }
  @media (min-width: 760px) {
    width: 410px;
  }
  @media (min-width: 992px) {
    width: 540px;
  }
  @media (min-width: 1200px) {
    width: 580px;
  }
`;
const Writer = styled.span`
  overflow: hidden;
  border-left: 2px solid #333333;
  border-right: 2px solid #333333;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
  font-family: "Noto Sans JP", sans-serif;

  @media (max-width: 760px) {
    height: 90%;
    width: 100px;
    font-size: 12px;
  }
  @media (min-width: 760px) {
    width: 70px;
    font-size: 15px;
  }
  @media (min-width: 992px) {
    width: 100px;
    font-size: 18px;
  }
  @media (min-width: 1200px) {
    width: 130px;
    font-size: 20px;
  }
`;

const Time = styled.div`
  overflow: hidden;
  border-right: 2px solid #333333;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans JP", sans-serif;
  span {
    text-align: center;
  }

  @media (max-width: 760px) {
    display: none;
  }
  @media (min-width: 760px) {
    width: 60px;
    font-size: 5px;
    padding: 0;
    margin: 0;
  }
  @media (min-width: 992px) {
    width: 90px;
    font-size: 13px;
  }
  @media (min-width: 1200px) {
    width: 120px;
    font-size: 18px;
  }
`;

const Time_Right = styled.div`
  overflow: hidden;
  border-left: 2px solid #333333;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans JP", sans-serif;
  span {
    text-align: center;
  }

  @media (max-width: 760px) {
    display: none;
  }
  @media (min-width: 760px) {
    width: 60px;
    font-size: 5px;
    padding: 0;
    margin: 0;
  }
  @media (min-width: 992px) {
    width: 90px;
    font-size: 13px;
  }
  @media (min-width: 1200px) {
    width: 120px;
    font-size: 18px;
  }
`;

const Border = styled.div`
  width: 50%;
  border: 1px solid #bbbbbb;
  margin: 25px;
`;

const WriteButton = styled(Button)`
  position: relative;
  margin-top: 50px;
  @media (max-width: 760px) {
    left: 190px;
  }
  @media (min-width: 760px) {
    font-size: 20px;
    left: 300px;
  }
  @media (min-width: 992px) {
    left: 400px;
  }
  @media (min-width: 1200px) {
    left: 450px;
  }
`;

const PostsContent = (props: any) => {
  /* REDUX */
  const authState = useSelector((state: RootState) => state.auth);
  const postsState = useSelector((state: RootState) => state.posts);

  /* INIT SET */
  useEffect(() => {
    console.log(postsState);
  }, [postsState]);

  return (
    <ContentContainer>
      <PostsSearch />
      {/* MAPPING POSTS LIST */}
      {postsState.length >= 1 ? (
        postsState.map((post: any, idx) => {
          return (
            <>
              {idx % 2 === 0 ? (
                <>
                  <LinkComponent
                    to={{
                      pathname: `/show/${post._id}`,
                      state: {
                        idx: idx,
                      },
                    }}
                  >
                    <ItemRow xs={4}>
                      <PreviewImage
                        src={
                          post.previewImg !== ""
                            ? post.previewImg
                            : "./images/11.png"
                        }
                      />
                      <TextContent>{post.title}</TextContent>
                      <Writer>{post.nickname}</Writer>
                      <Time>
                        <span>{post.date}</span>
                      </Time>
                    </ItemRow>
                  </LinkComponent>
                  <Border />
                </>
              ) : (
                <>
                  <LinkComponent
                    to={{
                      pathname: `/show/${post._id}`,
                      state: {
                        idx: idx,
                      },
                    }}
                  >
                    <ItemRow xs={4}>
                      <Time_Right>
                        <span>{post.date}</span>
                      </Time_Right>
                      <Writer>{post.nickname}</Writer>
                      <TextContent>{post.title}</TextContent>
                      <PreviewImage
                        src={
                          post.previewImg !== ""
                            ? post.previewImg
                            : "./images/11.png"
                        }
                      />
                    </ItemRow>
                  </LinkComponent>
                  <Border />
                </>
              )}
            </>
          );
        })
      ) : (
        <></>
      )}

      {authState.uid !== undefined ? (
        <Link to="/write">
          <WriteButton variant="outline-secondary">Write</WriteButton>
        </Link>
      ) : (
        <></>
      )}

      <PaginationComponent />
    </ContentContainer>
  );
};

export default PostsContent;
