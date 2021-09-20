import React from "react";
import { Pagination } from "react-bootstrap";
import styled from "styled-components";

const ContentPagination = styled(Pagination)`
  margin-top: 100px;
  margin-bottom: 50px;
  .sr-only {
    display: none;
  }
`;

const PaginationComponent = () => {
  return (
    <ContentPagination>
      <Pagination.Item key="1" active>
        1
      </Pagination.Item>
      <Pagination.Item key="2">2</Pagination.Item>
      <Pagination.Item key="3">3</Pagination.Item>
      <Pagination.Item key="4">4</Pagination.Item>
      <Pagination.Item key="5">5</Pagination.Item>
    </ContentPagination>
  );
};

export default PaginationComponent;
