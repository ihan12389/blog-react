import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import "../../style/fonts.css";

const HeaderContainer = styled(Container)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  padding: 50px 0;
  font-family: "Roboto Mono", monospace;
  border-bottom: 3px solid #333333;
  @media (max-width: 760px) {
    font-size: 30px;
    word-spacing: 3px;
    letter-spacing: 3px;
  }
  @media (min-width: 760px) {
    font-size: 50px;
    word-spacing: 3px;
    letter-spacing: 3px;
  }
  @media (min-width: 992px) {
    font-size: 55px;
    word-spacing: 5px;
    letter-spacing: 5px;
  }
  @media (min-width: 1200px) {
    font-size: 55px;
    word-spacing: 5px;
    letter-spacing: 5px;
  }
`;

const SubTitle = styled.span`
  font-family: "Noto Sans JP", sans-serif;
  text-align: center;
  margin-top: 60px;
  letter-spacing: 2px;
  word-spacing: 2px;
  line-height: 2;
  @media (max-width: 760px) {
    font-size: 13px;
  }
  @media (min-width: 760px) {
    font-size: 18px;
  }
  @media (min-width: 992px) {
    font-size: 19px;
  }
  @media (min-width: 1200px) {
    font-size: 19px;
  }
`;

const ShowHeader = () => {
  return (
    <HeaderContainer>
      <Title>THIS IS LIHANO BLOG</Title>

      <SubTitle>
        I WANT YOUR NEWS SO WRITE YOUR THINKING.
        <br />
        THIS WEB SPACE WILL BE COMPLETED BY YOUR THOUGHTS.
      </SubTitle>
    </HeaderContainer>
  );
};

export default ShowHeader;
