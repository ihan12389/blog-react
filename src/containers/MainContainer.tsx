import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import Header from "../components/main/Header";
import HeaderSearch from "../components/search/HeaderSearch";
import Main from "../components/main/Main";

const TopContainer = styled(Container)`
  height: 100%;
  padding: 0;
  @media (min-width: 760px) {
    width: 760px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1100px;
  }
`;

const FirstRow = styled(Row)`
  width: 100%;
  height: 600px;
  margin: 0;
  padding: 0;
`;

const SecondRow = styled(Row)`
  width: 100%;
  height: 400px;
  margin: 0;
  padding: 0;
`;

const MainContainer = () => {
  return (
    <TopContainer>
      <FirstRow>
        <Header />
      </FirstRow>
      <HeaderSearch />
      <SecondRow>
        <Main />
      </SecondRow>
    </TopContainer>
  );
};

export default MainContainer;
