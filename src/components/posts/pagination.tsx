import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../../reducers";

/* STYLE */
const ContentPagination = styled(Pagination)`
  margin-top: 100px;
  margin-bottom: 50px;
  .sr-only {
    display: none;
  }
`;

const PaginationComponent = (props: any) => {
  /* MAKE HISTORY */
  const history = useHistory();
  /* USE STATE */
  const [pageNumArr, setPageNumArr] = useState([0]);
  /* INIT SETTING */
  useEffect(() => {
    console.log(props.len);
    if (props.page <= 3) {
      setPageNumArr([1, 2, 3, 4, 5]);
    } else if (parseInt(props.page) === 4 && Math.ceil(props.len / 6) === 4) {
      setPageNumArr([
        parseInt(props.page) - 2,
        parseInt(props.page) - 1,
        parseInt(props.page),
        parseInt(props.page) + 1,
        parseInt(props.page) + 2,
      ]);
    } else if (parseInt(props.page) === Math.ceil(props.len / 6)) {
      setPageNumArr([
        parseInt(props.page) - 4,
        parseInt(props.page) - 3,
        parseInt(props.page) - 2,
        parseInt(props.page) - 1,
        parseInt(props.page),
      ]);
    } else if (parseInt(props.page) === Math.ceil(props.len / 6) - 1) {
      setPageNumArr([
        parseInt(props.page) - 3,
        parseInt(props.page) - 2,
        parseInt(props.page) - 1,
        parseInt(props.page),
        parseInt(props.page) + 1,
      ]);
    } else {
      console.log("Math", Math.ceil(props.len / 6));
      setPageNumArr([
        parseInt(props.page) - 2,
        parseInt(props.page) - 1,
        parseInt(props.page),
        parseInt(props.page) + 1,
        parseInt(props.page) + 2,
      ]);
    }
  }, [props.page]);

  return (
    <ContentPagination>
      <Pagination.First onClick={() => history.push(`/posts/1`)} />
      {pageNumArr.map((page) => {
        if (page === parseInt(props.page)) {
          return (
            <Pagination.Item key={page} active>
              {page}
            </Pagination.Item>
          );
        } else {
          return (
            <Pagination.Item
              key={page}
              onClick={() => history.push(`/posts/${page}`)}
            >
              {page}
            </Pagination.Item>
          );
        }
      })}
      <Pagination.Last
        onClick={() => history.push(`/posts/${Math.ceil(props.len / 6)}`)}
      />
    </ContentPagination>
  );
};

export default PaginationComponent;
