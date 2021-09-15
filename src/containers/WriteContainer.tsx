import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import WriteHeader from "../components/write/WriteHeader";
import SideBar from "../components/write/SideBar";
import WriteForm from "../components/write/WriteForm";

const ContainerShow = styled(Container)`
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
  height: 400px;
  margin: 0;
`;

const SecondRow = styled(Row)`
  margin: 0;
`;

const WriteContainer = () => {
  return (
    <ContainerShow>
      <SideBar />
      <FirstRow>
        <WriteHeader />
      </FirstRow>
      <SecondRow>
        <WriteForm />
      </SecondRow>
    </ContainerShow>
  );
};

export default WriteContainer;
