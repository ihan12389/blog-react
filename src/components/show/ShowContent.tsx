import React from "react";
import styled from "styled-components";
import { Container, Row, Button } from "react-bootstrap";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import { IoReturnDownBackSharp } from "react-icons/io5";

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
  height: 30px;
  span {
    height: 100%;
    text-align: center;
  }
  @media (max-width: 760px) {
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
      width: 50px;
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
      width: 50px;
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
      width: 60px;
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
  background-color: tomato;
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
  border: 1px solid #dddddd;
`;

const ShowContent = ({ content }: any) => {
  return (
    <ShowContainer>
      <HandleBarRow xs="3">
        <ImArrowLeft />
        <h2>The Posting Title</h2>
        <ImArrowRight />
      </HandleBarRow>
      <PostInformRow xs="5">
        <span className="postNum">13</span>
        <span className="writer">Lihano</span>
        <span className="title">Posting Title</span>
        <span className="likes">12</span>
        <span className="time">21/09/14 12:49</span>
      </PostInformRow>
      <Content>
        <Viewer
          className="ck-content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></Viewer>
      </Content>
      <BackButton variant="dark">
        <IoReturnDownBackSharp />
      </BackButton>
    </ShowContainer>
  );
};

export default ShowContent;
