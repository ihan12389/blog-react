import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import "../style/fonts.css";
import { Link } from "react-router-dom";

const SignupWrapper = styled(Container)`
  padding: 0;
  background-image: url("./images/13.jpg");
  background-size: cover;
  opacity: 0.6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .signupTitle {
    font-family: "Roboto Mono", monospace;
    color: white;
    margin-bottom: 20px;
    font-size: 25px;
  }

  @media (min-height: 550px) {
    height: 100%;
  }
  @media (min-width: 760px) {
    width: 760px;
    .signupTitle {
      font-size: 40px;
    }
  }
  @media (min-width: 992px) {
    width: 970px;
    .signupTitle {
      font-size: 45px;
    }
  }
  @media (min-width: 1200px) {
    width: 1100px;
    .signupTitle {
      font-size: 50px;
    }
  }
`;

const SignupForm = styled(Form)`
  margin-top: 20px;
  label {
    color: white;
  }
  .text-muted {
  }
  @media (min-width: 760px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
    label {
      font-size: 20px;
    }
  }
`;

const ButtonWrapper = styled(Container)`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const SignupContainer = () => {
  return (
    <SignupWrapper>
      <span className="signupTitle">WELCOME! SIGN UP HERE</span>
      <SignupForm>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckPassword">
          <Form.Label>Check Password</Form.Label>
          <Form.Control type="password" placeholder="Check password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNickname">
          <Form.Label>Nickname</Form.Label>
          <Form.Control type="text" placeholder="Nickname" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <ButtonWrapper>
          <Link to="/">
            <Button variant="dark">Back</Button>
          </Link>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </ButtonWrapper>
      </SignupForm>
    </SignupWrapper>
  );
};

export default SignupContainer;
