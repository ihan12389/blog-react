import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Row, Image, Button, Spinner } from "react-bootstrap";
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
    margin: 0px 10px;
  }
  @media (min-width: 1200px) {
    width: 170px;
    height: 150px;
    margin: 0px 40px;
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
  flex: 1;
  @media (max-width: 760px) {
    width: 240px;
    font-size: 14px;
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
    width: 130px;
    font-size: 14px;
  }
  @media (min-width: 760px) {
    width: 90px;
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
    width: 80px;
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
  width: 40%;
  border: 1px solid #bbbbbb;
  margin: 40px;
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
  /* GET PROPS STATE */
  const posts = props.posts;
  /* USE STATE */
  const [init, setInit] = useState(false);
  /* REDUX */
  const authState = useSelector((state: RootState) => state.auth);
  /* INIT SETTING */
  useEffect(() => {
    setInit(false);
    setTimeout(() => {
      setInit(true);
    }, 1000);
  }, [props.page]);
  return (
    <ContentContainer>
      <PostsSearch
        setSearch={props.setSearch}
        setTarget={props.setTarget}
        setPage={props.setPage}
      />
      {init ? (
        <>
          {/* MAPPING POSTS LIST */}
          {posts.length >= 1 ? (
            posts.map((post: any, idx: any) => {
              return (
                <>
                  {idx % 2 === 0 ? (
                    <>
                      <LinkComponent
                        to={{
                          pathname: `/lihano-board/show/${post._id}`,
                          state: {
                            idx: (parseInt(props.page) - 1) * 6 + idx,
                          },
                        }}
                      >
                        <ItemRow xs={4}>
                          <PreviewImage
                            src={
                              post.previewImg !== ""
                                ? post.previewImg
                                : "data:image/jpeg;base64,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"
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
                          pathname: `/lihano-board/show/${post._id}`,
                          state: {
                            idx: (parseInt(props.page) - 1) * 6 + idx,
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
                                : "data:image/jpeg;base64,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"
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
        </>
      ) : (
        <>
          <Spinner animation="border" />
        </>
      )}

      {authState.uid !== undefined ? (
        <Link to="/lihano-board/write">
          <WriteButton variant="outline-secondary">Write</WriteButton>
        </Link>
      ) : (
        <></>
      )}

      <PaginationComponent
        page={props.page}
        setPage={props.setPage}
        len={props.len}
      />
    </ContentContainer>
  );
};

export default PostsContent;
