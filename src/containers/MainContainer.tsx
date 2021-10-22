import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Row, Spinner } from "react-bootstrap";
import Header from "../components/main/Header";
import HeaderSearch from "../components/search/HeaderSearch";
import Main from "../components/main/Main";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";
import { TopActions } from "../actions/top";

/* STYLE */
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

const SpinnerContainer = styled(Container)`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-self: center;
`;

const MainSpinner = styled(Spinner)`
  margin: 150px;
`;

const MainContainer = () => {
  /* USE STATE */
  const [loading, setLoading] = useState(false);
  /* REDUX */
  const topState = useSelector((state: RootState) => state.top);
  const dispatch = useDispatch();
  /* INIT SETTING */
  useEffect(() => {
    console.log("MainContainer");
  }, []);

  useEffect(() => {
    if (topState.posts.length <= 1) {
      dispatch(TopActions.read());
    }
  }, []);

  useEffect(() => {
    if (topState.loading !== undefined) {
      setLoading(topState.loading);
    }
  }, [topState.loading]);

  return (
    <TopContainer>
      <FirstRow>
        <Header />
      </FirstRow>
      <HeaderSearch />
      <SecondRow>
        {loading ? (
          <SpinnerContainer>
            <MainSpinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </MainSpinner>
          </SpinnerContainer>
        ) : (
          <Main />
        )}
      </SecondRow>
    </TopContainer>
  );
};

export default MainContainer;
