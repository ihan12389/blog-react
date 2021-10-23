import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Row, Image, Button, Spinner } from "react-bootstrap";
import "../../style/fonts.css";
import PostsSearch from "../search/PostsSearch";
import { Link, useHistory } from "react-router-dom";
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
  /* MAKE HISTORY */
  const history = useHistory();
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
                          pathname: `/show/${post._id}`,
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
                                : "https://ilovepencil.com/wp-content/uploads/2017/03/2017_03_03_PENCIL-4.jpg"
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
                                : "https://ilovepencil.com/wp-content/uploads/2017/03/2017_03_03_PENCIL-4.jpg"
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
        <WriteButton
          variant="outline-secondary"
          onClick={() => history.push("/write")}
        >
          Write
        </WriteButton>
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
