import React from "react";
import styled from "styled-components";
import { Container, Row, Dropdown } from "react-bootstrap";
import ShowHeader from "../components/show/ShowHeader";
import ShowContent from "../components/show/ShowContent";
import SideBar from "../components/show/SideBar";

const ContainerShow = styled(Container)`
  height: 100%;
  padding: 0;
`;

const FirstRow = styled(Row)`
  height: 350px;
  margin: 0;
`;

const SecondRow = styled(Row)`
  margin: 0;
`;

const ShowContainer = () => {
  return (
    <ContainerShow fluid>
      <SideBar />
      <FirstRow>
        <ShowHeader />
      </FirstRow>
      <SecondRow>
        <ShowContent />
      </SecondRow>
    </ContainerShow>
  );
};

export default ShowContainer;
