import React from "react";
import styled from "styled-components";
import { Carousel, Container, Image, Button } from "react-bootstrap";
import "../../style/fonts.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

/* STYLE */
const HeaderContainer = styled(Container)`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const HeaderCarousel = styled(Carousel)`
  width: 100%;
  height: 100%;
  .carousel-inner {
    height: 100%;
  }
  .carousel-item {
    height: 100%;
  }
  .carousel-inner > .carousel-item > img {
    width: 100%;
    height: 100%;
    opacity: 0.9;
    object-fit: cover;
  }
  .sr-only {
    display: none;
  }
`;

const AuthContainer = styled(Container)`
  display: flex;
  justify-content: center;
  position: absolute;
  gap: 60px;
  top: 350px;
  margin: 0;
  padding: 0;
  @media (max-width: 760px) {
    gap: 30px;
  }
  @media (min-width: 760px) {
    width: 760px;
    gap: 150px;
  }
  @media (min-width: 992px) {
    width: 970px;
    gap: 180px;
  }
  @media (min-width: 1200px) {
    width: 1100px;
    gap: 200px;
  }
`;

const AuthButton = styled(Button)`
  opacity: 0.6;
  @media (max-width: 760px) {
    gap: 30px;
    width: 120px;
    height: 60px;
  }
  @media (min-width: 760px) {
    width: 130px;
    height: 60px;
  }
`;

const PostButton = styled(Button)`
  opacity: 0.6;
  @media (max-width: 760px) {
    width: 230px;
    height: 55px;
    font-size: 20px;
  }
  @media (min-width: 760px) {
    width: 250px;
    height: 55px;
    font-size: 20px;
  }
`;

const LabelContainer = styled(Container)`
  position: absolute;
  top: 150px;
  text-align: center;
  span {
    color: white;
    font-size: 60px;
    font-family: "Righteous", cursive;
    text-shadow: 4px 2px 2px rgba(0, 0, 0, 0.2);
    word-spacing: 3px;
    letter-spacing: 3px;
  }
  @media (min-width: 760px) {
    width: 760px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1100px;
    span {
      font-size: 70px;
    }
  }
`;

const Header = () => {
  /* REDUX */
  const authState = useSelector((state: RootState) => state.auth);

  return (
    <HeaderContainer>
      <HeaderCarousel>
        <Carousel.Item>
          <Image fluid src="./images/2.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <Image fluid src="./images/8.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <Image fluid src="./images/9.jpg" />
        </Carousel.Item>
      </HeaderCarousel>
      <LabelContainer>
        <span>LiHano's Blog</span>
      </LabelContainer>
      {authState.uid === undefined ? (
        <AuthContainer>
          <Link to="/login">
            <AuthButton variant="dark" size="lg">
              Log In
            </AuthButton>
          </Link>
          <Link to="/signup">
            <AuthButton variant="dark" size="lg">
              Sign Up
            </AuthButton>
          </Link>
        </AuthContainer>
      ) : (
        <AuthContainer>
          <Link to="/posts/1">
            <PostButton variant="danger">Go to the Posts Page!</PostButton>
          </Link>
        </AuthContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
