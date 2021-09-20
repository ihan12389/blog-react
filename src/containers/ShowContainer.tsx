import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import ShowHeader from "../components/show/ShowHeader";
import SideBar from "../components/show/SideBar";
import ShowContent from "../components/show/ShowContent";

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

const ShowContainer = ({ history }: any) => {
  return (
    <ContainerShow>
      <SideBar />
      <FirstRow>
        <ShowHeader />
      </FirstRow>
      <SecondRow>
        <ShowContent a={history} />
      </SecondRow>
    </ContainerShow>
  );
};

export default ShowContainer;
