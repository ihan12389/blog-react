import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import "../style/fonts.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { login } from "../apis/auth";
import { AuthActions } from "../actions/auth";

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

const LoginContainer = ({ history }: any) => {
  const authState = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const updateEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const updatePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const submitt = (event: any) => {
    event.preventDefault();
    if (!authState.loggingIn && password.length > 0 && email.length > 0) {
      dispatch(AuthActions.login({ email, password }));
      setPassword("");
    } else {
      alert("텍스트를 입력해주세요.");
    }
  };

  useEffect(() => {
    console.log(authState);
    if (authState.uid !== undefined) {
      alert("로그인에 성공했습니다.");
      history.push("/");
    }
  }, [authState]);

  return (
    <LoginWrapper>
      <span className="loginTitle">WELCOME! LOG IN HERE</span>
      <LoginForm onSubmit={submitt}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={updateEmail}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            value={password}
            onChange={updatePassword}
          />
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
