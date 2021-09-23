import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import ShowHeader from "../components/show/ShowHeader";
import SideBar from "../components/show/SideBar";
import ShowContent from "../components/show/ShowContent";
import { useDispatch } from "react-redux";
import { PostActions } from "../actions/post";

/* STYLE */
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

const ShowContainer = (props: any) => {
  /* USE STATE */
  const [idx, setIdx] = useState(0);
  /* REDUX */
  const dispatch = useDispatch();
  /* INIT SETTING */
  useEffect(() => {
    const postId = props.match.params.postId;
    setIdx(props.location.state.idx);
    dispatch(PostActions.read(postId));
  }, [props.match.params.postId]);

  return (
    <ContainerShow>
      <SideBar />
      <FirstRow>
        <ShowHeader />
      </FirstRow>
      <SecondRow>
        <ShowContent idx={idx} />
      </SecondRow>
    </ContainerShow>
  );
};

export default ShowContainer;
