import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const AppContainer = styled(Container)`
  height: 100%;
  background-color: #dddddd;
`;

const UpperRow = styled(Row)`
  background-color: #ff9a9e;
  height: 30%;
`;
const LowerRow = styled(Row)`
  background-color: #fad0c4;
  height: 70%;
`;

const Order = () => {
  return (
    <AppContainer fluid>
      <UpperRow xs={1} sm={3} md={5} lg={7}>
        <Col>글쓰기</Col>
      </UpperRow>
      <LowerRow xs={9} sm={7} md={5} lg={3}>
        <Col>또 쓰기</Col>
      </LowerRow>
    </AppContainer>
  );
};

export default Order;
