import React from "react";
import styled from "styled-components";
import { Carousel, Container, Image, Button } from "react-bootstrap";
import "../../style/fonts.css";

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
    opacity: 0.7;
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
  top: 275px;
  margin: 0;
  padding: 0;
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
  opacity: 0.5;

  @media (min-width: 1200px) {
    width: 130px;
    height: 60px;
  }
`;

const LabelContainer = styled(Container)`
  position: absolute;
  top: 100px;
  text-align: center;
  span {
    color: white;
    font-size: 60px;
    font-family: "Righteous", cursive;
    text-shadow: 4px 2px 2px #999999;
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
  return (
    <HeaderContainer>
      <HeaderCarousel>
        <Carousel.Item>
          <Image fluid src="./images/1.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <Image fluid src="./images/2.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <Image fluid src="./images/3.jpg" />
        </Carousel.Item>
      </HeaderCarousel>
      <LabelContainer>
        <span>LiHano's Blog</span>
      </LabelContainer>
      <AuthContainer>
        <AuthButton variant="success" size="lg">
          Log In
        </AuthButton>
        <AuthButton variant="success" size="lg">
          Sign Up
        </AuthButton>
      </AuthContainer>
    </HeaderContainer>
  );
};

export default Header;
