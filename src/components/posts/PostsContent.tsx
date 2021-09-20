import React from "react";
import styled from "styled-components";
import { Container, Row, Image, Button } from "react-bootstrap";
import "../../style/fonts.css";
import PostsSearch from "../search/PostsSearch";
import { Link } from "react-router-dom";
import PaginationComponent from "./pagination";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

const ContentContainer = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const LeftItemRow = styled(Row)`
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
  font-size: 18px;
  line-height: 1.8;
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

const PostsContent = () => {
  const authState = useSelector((state: RootState) => state.auth);
  return (
    <ContentContainer>
      <PostsSearch />

      <LeftItemRow xs={4}>
        <PreviewImage src="./images/15.jpg" />
        <TextContent>
          안녕하세요. 저는 이한입니다. 만나서 반가워요. 여러분들은 잘 지내고
          계시나요? 잘 지내고 계신다니 너무 다행이네요. 오늘 제가 드리고 싶은
          말씀은 블라블라블라
        </TextContent>
        <Writer>LIHANO</Writer>
        <Time>
          <span className="Month">21-09-13</span>
          <span className="Hour">12 : 41</span>
        </Time>
      </LeftItemRow>
      <Border />
      <LeftItemRow xs={4}>
        <Time_Right>
          <span className="Month">21-09-13</span>
          <span className="Hour">12 : 41</span>
        </Time_Right>
        <Writer>LIHANO</Writer>
        <TextContent>
          안녕하세요. 저는 이한입니다. 만나서 반가워요. 여러분들은 잘 지내고
          계시나요? 잘 지내고 계신다니 너무 다행이네요. 오늘 제가 드리고 싶은
          말씀은 블라블라블라
        </TextContent>
        <PreviewImage src="./images/16.jpg" />
      </LeftItemRow>
      <Border />

      <LeftItemRow xs={4}>
        <PreviewImage src="./images/17.jpg" />
        <TextContent>
          안녕하세요. 저는 이한입니다. 만나서 반가워요. 여러분들은 잘 지내고
          계시나요? 잘 지내고 계신다니 너무 다행이네요. 오늘 제가 드리고 싶은
          말씀은 블라블라블라
        </TextContent>
        <Writer>LIHANO</Writer>
        <Time>
          <span className="Month">21-09-13</span>
          <span className="Hour">12 : 41</span>
        </Time>
      </LeftItemRow>
      <Border />

      <LeftItemRow xs={4}>
        <Time_Right>
          <span className="Month">21-09-13</span>
          <span className="Hour">12 : 41</span>
        </Time_Right>
        <Writer>LIHANO</Writer>
        <TextContent>
          안녕하세요. 저는 이한입니다. 만나서 반가워요. 여러분들은 잘 지내고
          계시나요? 잘 지내고 계신다니 너무 다행이네요. 오늘 제가 드리고 싶은
          말씀은 블라블라블라
        </TextContent>
        <PreviewImage src="./images/18.jpg" />
      </LeftItemRow>
      <Border />

      <LeftItemRow xs={4}>
        <PreviewImage src="./images/19.jpg" />
        <TextContent>
          안녕하세요. 저는 이한입니다. 만나서 반가워요. 여러분들은 잘 지내고
          계시나요? 잘 지내고 계신다니 너무 다행이네요. 오늘 제가 드리고 싶은
          말씀은 블라블라블라
        </TextContent>
        <Writer>LIHANO</Writer>
        <Time>
          <span className="Month">21-09-13</span>
          <span className="Hour">12 : 41</span>
        </Time>
      </LeftItemRow>
      <Border />

      <LeftItemRow xs={4}>
        <Time_Right>
          <span className="Month">21-09-13</span>
          <span className="Hour">12 : 41</span>
        </Time_Right>
        <Writer>LIHANO</Writer>
        <TextContent>
          안녕하세요. 저는 이한입니다. 만나서 반가워요. 여러분들은 잘 지내고
          계시나요? 잘 지내고 계신다니 너무 다행이네요. 오늘 제가 드리고 싶은
          말씀은 블라블라블라
        </TextContent>
        <PreviewImage src="./images/20.jpg" />
      </LeftItemRow>
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
