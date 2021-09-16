import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import "../style/fonts.css";
import { Link } from "react-router-dom";

const LoginWrapper = styled(Container)`
  padding: 0;
  background-image: url("./images/13.jpg");
  background-size: cover;
  opacity: 0.6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .loginTitle {
    font-family: "Roboto Mono", monospace;
    color: white;
    margin-bottom: 20px;
  }

  @media (min-height: 340px) {
    height: 100%;
    .loginTitle {
      font-size: 25px;
    }
  }
  @media (min-width: 760px) {
    width: 760px;
    .loginTitle {
      font-size: 40px;
    }
  }
  @media (min-width: 992px) {
    width: 970px;
    .loginTitle {
      font-size: 45px;
    }
  }
  @media (min-width: 1200px) {
    width: 1100px;
    .loginTitle {
      font-size: 50px;
    }
  }
`;

const LoginForm = styled(Form)`
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

const LoginContainer = () => {
  return (
    <LoginWrapper>
      <span className="loginTitle">WELCOME! LOG IN HERE</span>
      <LoginForm>
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
      </LoginForm>
    </LoginWrapper>
  );
};

export default LoginContainer;
